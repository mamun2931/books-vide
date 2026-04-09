import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../context/BookProvider';

const Wishlist = ({short}) => {
    const { wishlistBook } = useContext(BookContext);

        const [filterWishlist, setFilterWishlist] = useState(wishlistBook);
    
    useEffect(()=>{
            if(short){
                if(short === "page"){
                    const shortData =[...wishlistBook].sort((a,b)=> a.totalPages - b.totalPages);
                    setFilterWishlist(shortData)
                }else if(short === "rating"){
                    const shortData = [...wishlistBook].sort((a,b)=> a.rating - b.rating);
                    setFilterWishlist(shortData)
                }
            }
    },  [short, wishlistBook]);

    // Guard clause to handle empty wishlist gracefully
    if (!wishlistBook || wishlistBook.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <h2 className="text-2xl font-semibold text-gray-500">Your wishlist is empty.</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 p-4">
            {
                filterWishlist.map((book) => {
                    // Destructure properties from each individual book object
                    const { 
                        bookId, 
                        image, 
                        bookName, 
                        author, 
                        category, 
                        tags, 
                        rating, 
                        publisher, 
                        yearOfPublishing,
                        totalPages 
                    } = book;

                    return (
                        <div key={bookId} className="flex flex-col lg:flex-row gap-6 p-6 border rounded-2xl bg-white shadow-sm">
                            {/* Image Section */}
                            <div className="w-full lg:w-56 h-72 bg-gray-100 rounded-xl flex items-center justify-center p-4">
                                <img src={image} alt={bookName} className="h-full object-contain" />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 space-y-4">
                                <h2 className="text-2xl font-bold">{bookName}</h2>
                                <p className="text-gray-700 font-medium text-lg">By: {author}</p>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="font-bold">Tag</span>
                                    {tags?.map((tag, index) => (
                                        <span key={index} className="text-[#23BE0A] bg-green-50 px-4 py-1 rounded-full text-sm font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                    <span className="text-gray-500">Published: {yearOfPublishing}</span>
                                </div>

                                <div className="flex flex-wrap gap-6 text-gray-500 pb-4 border-b">
                                    <p>Publisher: {publisher}</p>
                                    <p>Page: {totalPages}</p>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                                        Category: {category}
                                    </span>
                                    <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
                                        Rating: {rating}
                                    </span>
                                    <button className="bg-[#23BE0A] hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Wishlist;