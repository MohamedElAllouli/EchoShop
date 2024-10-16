import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {/* Previous button */}
      <Pagination.Prev
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {/* Page numbers */}
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}

      {/* Next button */}
      <Pagination.Next
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      />
    </Pagination>
  );
};

export default PaginationComponent;
