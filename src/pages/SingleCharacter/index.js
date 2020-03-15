/* eslint-disable react/no-danger */
import React, { useMemo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { MdBrokenImage } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import AppLayout from '~/pages/_layouts/app';
import { Button, Paginate } from '~/components';

import {
  Character,
  InfoContainer,
  Scrollbar,
  ComicContainer,
  Title,
  NoComics,
} from './styles';

export default function SingleCharacter({ match }) {
  const [comics, setComics] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  const character = useSelector(state =>
    state.characters.characters.find(c => c.id === Number(match.params.id))
  );

  const thumbnail = useMemo(() => {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }, [character.thumbnail.extension, character.thumbnail.path]);

  useEffect(() => {
    async function loadComics() {
      try {
        const { data: response } = await api.get(
          `/characters/${match.params.id}/comics`,
          {
            params: {
              ...api.defaults.params,
              limit: 100,
            },
          }
        );

        const {
          offset,
          limit,
          total,
          count,
          results: getComics,
        } = response.data;
        const newPagination = {
          offset,
          limit,
          total,
          count,
          currentPage: 1,
          lastPage: Math.ceil(total / limit),
        };

        setComics(getComics);
        setPagination(newPagination);
      } catch (error) {
        toast.error('Erro ao buscar facículos');
      }

      setLoading(false);
    }

    loadComics();
  }, [match.params.id]);

  function image(comic) {
    return `${comic.images[0].path}.${comic.images[0].extension}`;
  }

  return (
    <AppLayout noPaddingX loading={loading}>
      <>
        <Character>
          <div>
            <div className="thumb-container">
              <img className="thumbnail" src={thumbnail} alt={character.name} />
            </div>

            <InfoContainer>
              <h1 className="character-name">{character.name}</h1>
              <p>{character.description || 'Sem Descrição'}</p>
            </InfoContainer>
          </div>
          <Button onClick={() => history.push('/characters')}>Voltar</Button>
        </Character>

        <Title>Facículos</Title>

        {comics.length && (
          <Scrollbar>
            {comics.map(comic => (
              <ComicContainer key={String(comic.id)}>
                {comic.images.length ? (
                  <img src={image(comic)} alt={comic.title} />
                ) : (
                  <div className="cover-container">
                    <MdBrokenImage size={100} color="#666" />
                    <p>Sem Capa</p>
                  </div>
                )}

                <div className="comic-info">
                  <div className="comic-head">
                    <p>
                      <b>Título:</b> {comic.title}
                    </p>
                    <p>
                      <b>Número de capa:</b> {comic.issueNumber || 'N/A'}
                    </p>
                  </div>
                  <div className="comic-description">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: comic.description || 'N/A',
                      }}
                    />
                  </div>
                </div>
              </ComicContainer>
            ))}
          </Scrollbar>
        )}

        {!loading && !comics.length && (
          <NoComics>
            <h3>Sem Facículos para mostrar</h3>
          </NoComics>
        )}
        {pagination && pagination.total > pagination.limit && (
          <Paginate pagination={pagination} />
        )}
      </>
    </AppLayout>
  );
}

SingleCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
