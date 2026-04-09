import React, { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wishlist from '../../components/ListedBooks/Wishlist';
import ReadList from '../../components/ListedBooks/ReadList';

const Books = () => {
    const [short, setShort] = useState("")    

    const handleSort = (type) => {
        setShort(type);
        // This force-closes the DaisyUI dropdown
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

    return (
        <div className='container mx-auto'>
            
                <div className="dropdown dropdown-start flex justify-center my-6">
                <div tabIndex={0} role="button" className="btn m-1">short by</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li  onClick={()=> setShort("page")}><a>Page</a></li>
                    <li  onClick={()=> setShort("rating")}><a>Rating</a></li>
                </ul>
                </div>
                
                
            <Tabs>
                <TabList>
                <Tab>Red list</Tab>
                <Tab>wishlist</Tab>
                </TabList>

                <TabPanel>
                    <ReadList short={short}></ReadList>
                </TabPanel>
                <TabPanel>
                    <Wishlist short={short}></Wishlist>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;