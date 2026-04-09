import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addToReadListLocalDB, getAllReadListFromLocalDB } from '../utils/LocalDLB';
export const BookContext = createContext();


const BookProvider = ({children}) => {
    
    const [storedBooks, setStoredBooks] = useState(()=> getAllReadListFromLocalDB())
    const [wishlistBook, setWishlistBook] = useState(()=> getAllReadListFromLocalDB())

//  useEffect(()=> {
//      const getAllReadListFromLocal = getAllReadListFromLocalDB()
    const handleMarkRead = (currentBook) =>{

        addToReadListLocalDB(currentBook)


     const isExist = storedBooks.find(book => book.bookId === currentBook.bookId)
        if(isExist){
            toast.error("the book is already exist")
        }else{
            setStoredBooks([...storedBooks , currentBook])
            toast.success(`${currentBook.bookName} this books add red list`)
        }
        console.log(currentBook,storedBooks)

    }


    const handleWishlistBook = (currentBook) =>{

        addToReadListLocalDB(currentBook)

    const isExistWishlist = storedBooks.find(book=> book.bookId === currentBook.bookId) 
    if(isExistWishlist){
            toast.error("this books is already in red list")
            return;
        }

     const isExist = wishlistBook.find(book => book.bookId === currentBook.bookId)
        if(isExist){
            toast.error("the book is already exist")
        }else{
            setWishlistBook([...wishlistBook , currentBook])
            toast.success(`${currentBook.bookName} this add wishlist`)
        }
        console.log(currentBook,wishlistBook)
    }

     const data ={

            storedBooks,
            setStoredBooks,
            handleMarkRead,
            handleWishlistBook,
            wishlistBook,
            setWishlistBook

        }
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;