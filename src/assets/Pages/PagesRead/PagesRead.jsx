import React, { use } from 'react';
import Recharts from './recharts';
    const promiseChart = fetch("booksData.json").then(res=> res.json())
const PagesRead = () => {

    const data = use(promiseChart)
    console.log(data)

    return (
        <div className='container mx-auto rounded-2xl'>
           <Recharts data={data} ></Recharts>
            
        </div>
    );
};

export default PagesRead;