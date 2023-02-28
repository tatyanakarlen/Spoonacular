import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  // $('.mylink').click(function(event){
  //     event.preventDefault();
  // });

  const noHashInLink = (e) => {
    e.preventDefault();
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log('this is page numbers', pageNumbers)

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} onClick={noHashInLink} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
