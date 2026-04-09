import React from 'react';
import imgHero from "./hero_img.jpg"

const Banner = () => {
    return (
         <div>
                <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
                        <img 
                        src={imgHero}
                         className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>

                        <h1 className="text-5xl font-bold mb-4 ">Books to freshen up <br /> your bookshelf</h1>

                        <button className="btn btn-success">View The List</button>
                        </div>
                            </div>
                 </div>
        </div>
    );
};

export default Banner;