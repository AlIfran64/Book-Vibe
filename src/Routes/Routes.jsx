import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/booksData.json')
      },
      {
        path: '/pagesToRead',
        Component: PagesToRead
      },
      {
        path: '/listedBooks',
        loader: () => fetch('/booksData.json'),
        Component: ListedBooks
      },
      {
        path: '/bookDetails/:bookId',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      }
    ]
  },
]);