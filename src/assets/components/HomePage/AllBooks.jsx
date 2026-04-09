import React, { use } from 'react';
import Card from '../../ui/Card';

// Fetching outside the component prevents re-triggering on every render
const promiseBooks = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(promiseBooks);

    return (
        <div className='my-12 container mx-auto px-4'>
            <h2 className='font-bold text-4xl text-center mb-10'>Books</h2>

            {/* Grid layout to show multiple books per row */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map((book) => <Card key={book.bookId} book={book}></Card>)
                }
            </div>
        </div>
    );
};

export default AllBooks;