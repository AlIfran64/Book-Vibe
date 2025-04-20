import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)


const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === id)

  const { bookName, image, author, review, totalPages, rating, category, publisher, yearOfPublishing } = singleBook;


  const handleMarkAsRead = (id) => {
    // Store with id
    // Where to store
    // array or collection
    // if book already exist? then show a alert
    // if not book not exist then push in the collection or array
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    addToStoreDB(id);
  }

  return (
    <div className='flex justify-center items-stretch gap-20 my-15'>
      <div className='bg-[rgba(19,19,19,0.05)] py-20 px-20 rounded-xl shadow-xl  flex-shrink-0'>
        <img className='w-80 h-full rounded-xl' src={image} alt="img" />
      </div>
      <div>
        <p className='text-3xl font-bold mb-2'>{bookName}</p>
        <p className='mb-5'>By: {author}</p>
        <div className="border border-dashed border-b-gray-50"></div>
        <p className='my-5'>{category}</p>
        <div className="border border-dashed border-b-gray-50"></div>
        <p className='mt-5'>{review}</p>

        <div className='flex  items-center gap-5 my-5'>

          <div >
            <p className='text-xl font-semibold'>Tag: </p>
          </div>
          <div className='flex items-center'>
            <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
              <p className='text-lg'>Young Adult</p>
            </div>
            <div className='bg-[rgba(35,190,10,0.05)] text-[rgba(35,190,10,1)] font-semibold px-4 py-1 rounded-2xl'>
              <p className='text-lg'>Identity</p>
            </div>
          </div>
        </div>
        <div className="border border-dashed border-b-gray-50"></div>

        <div className='flex items-center gap-10 my-10'>
          <div>
            <p>Number of pages:</p>
            <p>Publisher:</p>
            <p>Year of publishing:</p>
            <p>Rating</p>
          </div>
          <div>
            <p className='font-bold'>{totalPages}</p>
            <p className='font-bold'>{publisher}</p>
            <p className='font-bold'>{yearOfPublishing}</p>
            <p className='font-bold'>{rating}</p>
          </div>
        </div>

        <div className='flex items-center gap-10 mt-5'>
          <button onClick={() => handleMarkAsRead(id)} className='border-2 py-4 px-8 rounded-xl border-black'>Mark as read</button>
          <button className='border py-4 px-8 rounded-xl bg-black text-white'>Add to wishlist</button>
        </div>


      </div>
    </div>
  );
};

export default BookDetails;