import React from 'react';

import bookimage from '../../assets/istockphoto-1375877799-612x612-removebg-preview.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full bg-gray-200 my-5 rounded-lg'>
            <div >
                <h1 className='text-6xl my-5 font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn  my-5 bg-green-500 text-white'>View The List</button>
            </div>
            <div>
                <img className='w-12/12 ' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;