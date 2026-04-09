import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../../context/BookProvider';

const BooksDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    
    // 1. Corrected .find() method
    const book = data.find((book) => book.bookId === Number(id));
   
    // Destructure for easier use
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const { handleMarkRead, handleWishlistBook}= useContext(BookContext);


    return (
        <div className="container mx-auto my-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}       
                <div className="bg-base-200 p-12 rounded-2xl flex justify-center">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded-lg shadow-2xl h-[500px] object-contain"
                    />
                </div>

                {/* Details Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="text-xl font-medium text-gray-600">By: {author}</p>
                    
                    <div className="border-y py-3 text-lg font-medium text-gray-600">
                        {category}
                    </div>

                    <p><span className="font-bold">Review:</span> {review}</p>

                    <div className="flex gap-4 items-center">
                        <span className="font-bold">Tag:</span>
                        {tags.map((tag, idx) => (
                            <span key={idx} className="text-green-500 bg-green-50 px-3 py-1 rounded-full font-bold text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="divider"></div>

                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <tbody>
                                <tr>
                                    <td className="text-gray-500 py-2">Number of Pages:</td>
                                    <td className="font-bold">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-500 py-2">Publisher:</td>
                                    <td className="font-bold">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-500 py-2">Year of Publishing:</td>
                                    <td className="font-bold">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-500 py-2">Rating:</td>
                                    <td className="font-bold">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button onClick={()=> handleMarkRead(book)} className="btn btn-outline px-8 border-gray-300">Read</button>
                        <button onClick={()=> handleWishlistBook(book)} className="btn btn-info text-white px-8">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;