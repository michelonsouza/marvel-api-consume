import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { paginationRequest } from '~/store/modules/characters/actions';

import { Container } from './styles';

function Paginate({ pagination, onPageChange }) {
  const dispatch = useDispatch();

  function handlePagination(page) {
    if (page.selected + 1 !== pagination.currentPage && !onPageChange) {
      dispatch(paginationRequest(page.selected + 1));
    }

    if (onPageChange) {
      onPageChange(page.selected + 1);
    }
  }

  return (
    <Container containerClassName="pagination-container">
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        pageCount={pagination.lastPage}
        initialPage={pagination.currentPage - 1}
        forcePage={pagination.currentPage - 1}
        onPageChange={handlePagination}
        containerClassName="pagination-container"
        pageClassName="page-bullet"
        activeClassName="active"
        nextClassName="page-nextprev"
        previousClassName="page-nextprev"
        breakLabel=""
        disableInitialCallback
      />
    </Container>
  );
}

Paginate.defaultProps = {
  onPageChange: null,
};

Paginate.propTypes = {
  onPageChange: PropTypes.func,
  pagination: PropTypes.shape({
    offset: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number,
    count: PropTypes.number,
    currentPage: PropTypes.number,
    lastPage: PropTypes.number,
  }).isRequired,
};

export default memo(Paginate);
