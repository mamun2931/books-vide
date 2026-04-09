import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';


const Card = ({book}) => {
    return (
                    <Link to={`/booksDetails/${book.bookId}`} className="card bg-base-100 shadow-xl border border-gray-100 p-6">
                            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                                <img
                                    src={book.image} 
                                    alt={book.bookName}
                                    className='h-[166px] object-contain' 
                                />
                            </figure>
                            <div className="card-body px-0 pb-0">
                                <div className='flex gap-3'>
                                    {book.tags.map((tag, index) => (
                                        <span key={index} className="badge badge-soft badge-success text-green-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="card-title text-2xl font-bold mt-2">
                                    {book.bookName}
                                </h2>
                                <p className='font-medium text-gray-600'>By: {book.author}</p>
                                
                                <div className="border-t border-dashed my-4"></div>
                                
                                <div className="card-actions justify-between items-center text-gray-600">
                                    <div>{book.category}</div>
                                    <div className='flex items-center gap-2'>
                                        {book.rating} <span><FaRegStar /></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
    );
};

export default Card;