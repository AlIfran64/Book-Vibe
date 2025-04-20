import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) => convertedStoredBook.includes(book.bookId));
    setReadList(myReadList);
  }, []);


  const handleSort = (type) => {
    setSort(type)

    if (type === "pages") {
      const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPage)
    }

    if (type === "ratings") {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings)
    }

  }

  return (
    <div>
      <div className='bg-[rgba(19,19,19,0.05)] py-8 px-10 mb-10 rounded-xl'>
        <h1 className='text-3xl font-bold text-center'>Books</h1>
      </div>

      <div className='flex justify-center'>
        <div className="dropdown my-10 ">
          <div tabIndex={0} role="button" className="btn m-1 bg-black text-white px-10 py-6 text-xl">Sort by: {sort ? sort : ""}</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
            <li><a onClick={() => handleSort("ratings")}>Rating</a></li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read {readList.length}</h2>
          {
            readList.map((b) =>

              <Book key={b.bookId} book={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;