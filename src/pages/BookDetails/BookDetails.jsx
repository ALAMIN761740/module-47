import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id }= useParams();
    const BookId = parseInt(id);
    const data =useLoaderData();
    const SingleBook=data.find(book=>book.bookId===BookId);
    
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,
        yearOfPublishing,} =SingleBook;
   
   
    return (
        <div className=" grid grid-cols-3 my-10  shadow-sm">
            <figure>
                <img
                className='h-[464px] w-[325px] bg-gray-200 m-7 rounded-lg p-10'
                src={image}
                alt="Movie" />
            </figure>
            <div className='my-5 col-span-2 p-2'>
                <div className="">
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p>By : {publisher}</p>
                </div>
                <div className='my-5'>
                    <div className='border-t-2 border-gray-300'></div>
                    <p className='my-2'>{category}</p>
                    <div className='border-t-2 border-gray-300'></div>
                    <div className="card-actions justify-end"></div>
                    <div className='my-4'><span className='font-bold'>Review :</span> {review}</div>
                    <div><span>Tag :</span><span className='text-green-500'>{tags}</span></div>
                    <div className='border-t-2 border-gray-300 mt-5'></div>
                </div>
                <div>
                    <p><span className='text-gray-400'>Number of Pages      :</span><span className='font-bold'>{totalPages}</span></p>
                    <p><span className='text-gray-400'>Publisher            :</span><span className='font-bold'>{publisher}</span></p>
                    <p><span className='text-gray-400'>Year of Publishing   :</span><span className='font-bold'>{ yearOfPublishing}</span></p>
                    <p><span className='text-gray-400'>Rating               :</span><span className='font-bold'>{rating}</span></p>
                </div>
                <div className='my-5'>
                    <button className='btn mr-5 font-bold'>Read</button>
                    <button className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-bold'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;