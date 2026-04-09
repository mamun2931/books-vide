import React from 'react';
import { Link } from 'react-router';


const Errorpage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            
            <div className="text-center px-6">
                
                {/* Big 404 */}
                <h1 className="text-9xl font-extrabold drop-shadow-lg animate-bounce">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-lg text-gray-200">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                        Go Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Errorpage;