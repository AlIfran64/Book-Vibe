import React, { useContext } from 'react';
import Book from '../Book/Book';
import { DataContext } from '../Home/Home';

const Books = () => {

  const data = useContext(DataContext);

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl font-semibold text-center mt-20 mb-8'>Books</h1>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10  place-items-center'>
        {
          data.map((book) => <Book book={book} key={book.bookId}></Book>)
        }
      </div>

    </div>
  );
};

export default Books;