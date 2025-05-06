import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPages/ErrorPage';
import Home from '../pages/Home/Home';


import pagesToRead from '../pages/Pages to Read/pagesToRead';
import ListedBooks from '../pages/Listed Books/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';
  






export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        loader:()=>fetch('bookData.json'),
        path:"/",
        Component:Home
      },
      {
        path:'/ListedBook',
        Component:ListedBooks
      },
      {
        path:'/pagesToRead',
        Component:pagesToRead
      },
      {
        path:'/BookDetails/:id',
        loader:()=>fetch('bookData.json'),
        Component:BookDetails
      }
    ]
  },
]);