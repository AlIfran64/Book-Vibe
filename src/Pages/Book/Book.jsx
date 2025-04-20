import React from 'react';

const Book = ({ book }) => {

  const { image, bookName } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 py-5 bg-[rgba(243,243,243,1)] m-5 rounded-lg">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-28 h-40" />
      </figure>
      <div className="card-body">
        <div className='flex justify-start items-center gap-5'>
          <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
            <p>Young Adult</p>
          </div>
          <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
            <p>Identity</p>
          </div>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;