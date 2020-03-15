import React, { memo, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Paginate from '../Paginate';
import { Container, DataHead, Scrollbar } from './styles';
import DataItem from './DataItem';

function DataSet({ labels, data, pagination }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current._container.scrollTop = 0;
      scrollRef.current._container.scrollLeft = 0;
    }
  }, [data]);

  return (
    <Container>
      <Scrollbar className="scrollbar-container" ref={scrollRef}>
        <DataHead>
          {labels.map((label, index) => (
            <span data-index={index} key={`data-head-text-${String(index)}`}>
              {label}
            </span>
          ))}
        </DataHead>
        {data.map(item => (
          <DataItem
            key={String(item.id)}
            item={item}
            to={`/characters/${item.id}`}
            title={item.name}
          />
        ))}
      </Scrollbar>
      <Paginate pagination={pagination} />
    </Container>
  );
}

DataSet.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      modified: PropTypes.date,
      resourceURI: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string,
      }),
    })
  ).isRequired,
  pagination: PropTypes.shape({}).isRequired,
};

export default memo(DataSet);
