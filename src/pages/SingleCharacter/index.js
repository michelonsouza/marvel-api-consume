/* eslint-disable react/no-danger */
import React, { useMemo, useEffect, useState, useRef, memo } from 'react';
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

function SingleCharacter({ match }) {
  const [comics, setComics] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const character = useSelector(state =>
    state.characters.characters.find(c => c.id === Number(match.params.id))
  );

  const thumbnail = useMemo(() => {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }, [character.thumbnail.extension, character.thumbnail.path]);

  async function loadComics(page = 1) {
    setLoading(true);
    try {
      const { data: response } = await api.get(
        `/characters/${match.params.id}/comics`,
        {
          params: {
            ...api.defaults.params,
            limit: 100,
            offset: (page - 1) * 100,
          },
        }
      );

      const { offset, limit, total, count, results: getComics } = response.data;
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

      if (scrollRef) {
        scrollRef.current._container.scrollTop = 0;
        scrollRef.current._container.scrollLeft = 0;
      }
    } catch (error) {
      toast.error('Erro ao buscar facículos');
    }

    setLoading(false);
  }

  useEffect(() => {
    loadComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function image(comic) {
    return `${comic.images[0].path}.${comic.images[0].extension}`;
  }

  function handlePageChange(page) {
    loadComics(page);
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
          <Scrollbar
            ref={scrollRef}
            data-paginate={String(
              pagination && pagination.total > pagination.limit
            )}
          >
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
                        __html: comic.description || 'SEM DESCRIÇÃO',
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
          <Paginate pagination={pagination} onPageChange={handlePageChange} />
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

export default memo(SingleCharacter);
