import React from 'react'
import './Pagination.css';
import {Link } from 'react-router-dom';
const Pagination = ({ totalPost  ,   postPerPage , paginate}) => {

    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

    return (
        <div className="container">
             <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link   onClick={() => paginate(number)}  to='#' className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
        </div>
    )
}

export default Pagination
