import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../context/BookProvider';

const ReadList = ({short}) => {
    const { storedBooks } = useContext(BookContext);
    const [filterReadList, setFilterReadList] = useState(storedBooks);

useEffect(()=>{
        if(short){
            if(short === "page"){
                const shortData =[...storedBooks].sort((a,b)=> a.totalPages - b.totalPages);
                setFilterReadList(shortData)
            }else if(short === "rating"){
                const shortData = [...storedBooks].sort((a,b)=> a.rating - b.rating);
                setFilterReadList(shortData)
            }
        }
},  [short, storedBooks]);


    // Handle case where no books have been read yet
    if (storedBooks.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-400">You haven't added any books to your Read List yet.</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            {
                filterReadList.map((book) => {
                    const { 
                        bookId, 
                        image, 
                        bookName, 
                        author,  
                        tags, 
                        publisher, 
                        yearOfPublishing,
                        category,
                        rating,
                        totalPages
                    } = book;

                    return (
                        <div key={bookId} className="border p-6 rounded-2xl flex flex-col md:flex-row gap-6 bg-white">
                            {/* Image Section */}
                            <div className="w-full md:w-56 h-60 bg-gray-100 rounded-xl flex justify-center items-center p-4">
                                <img src={image} alt={bookName} className="h-full object-contain" />
                            </div>
                            
                            {/* Content Section */}
                            <div className="flex-1 space-y-3">
                                <h2 className="text-2xl font-bold font-playfair">{bookName}</h2>
                                <p className="font-medium text-gray-700 text-lg">By: {author}</p>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="font-bold">Tag</span>
                                    {tags.map((tag, idx) => (
                                        <span key={idx} className="text-[#23BE0A] bg-green-50 px-4 py-1 rounded-full text-sm font-semibold">
                                            #{tag}
                                        </span>
                                    ))}
                                    <span className="text-gray-500 flex items-center gap-2">
                                        <i className="fa-regular fa-calendar-check"></i> Year of Publishing: {yearOfPublishing}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-6 text-gray-500 border-b pb-4">
                                    <span className="flex items-center gap-2">Publisher: {publisher}</span>
                                    <span className="flex items-center gap-2">Page: {totalPages}</span>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm">Category: {category}</span>
                                    <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm">Rating: {rating}</span>
                                    <button className="bg-[#23BE0A] text-white px-5 py-2 rounded-full text-sm font-medium">
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

export default ReadList;