import { createBrowserRouter } from "react-router";
import MainLayout from "../assets/Layout/MainLayout";
import Books from "../assets/Pages/Books/Books";
import HomePage from "../assets/Pages/HomePage/HomePage";
import Errorpage from "../assets/Pages/ErrorPage/Errorpage";
import BooksDetails from "../assets/Pages/BooksDetails/BooksDetails";
import PagesRead from "../assets/Pages/PagesRead/PagesRead";

const Loading = () => (
  <div className="flex justify-center items-center min-h-screen">
    <span className="loading loading-spinner loading-lg text-success"></span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    HydrateFallback: Loading,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path: "/books",
        Component: Books
      },
      {
        path: "booksDetails/:id",
        Component: BooksDetails,
        loader:()=> fetch('/booksData.json')
      },
      {
        path: "/pagesReadList",
        Component: PagesRead
      }

    ],

    errorElement: <Errorpage></Errorpage>
  },

])