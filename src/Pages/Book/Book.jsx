import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {

  const { image, bookName, author, category, rating } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 py-5 bg-[rgba(243,243,243,1)] m-5 rounded-lg">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-52 h-72" />
      </figure>
      <div className="card-body">
        <div className='flex justify-start items-center gap-5'>
          <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
            <p className='text-lg'>Young Adult</p>
          </div>
          <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
            <p className='text-lg'>Identity</p>
          </div>
        </div>
        <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
        <p className='text-lg'>By: {author}</p>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-lg'>{category}</p>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <p className='text-lg'>{rating}</p>
            <FaRegStar className='text-lg' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Book;