import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id }= useParams();
    const BookId = parseInt(id);
    const data =useLoaderData();
    const SingleBook=data.find(book=>book.bookId===BookId);
    
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,
        yearOfPublishing,} =SingleBook || {};
    
    const handleMarkAsRead = (id) => {
        addToStoreDB(id)
    }
   
   
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
                    <div className='flex'><span>Tag :</span><span className='flex  gap-10 text-green-500'>
                            {
                                tags.map(tag=><button>{tag}</button>)
                            }
                        </span></div>
                    <div className='border-t-2 border-gray-300 mt-5'></div>
                </div>
                <div className=" mt-6">
                    <table className="table-auto  text-left">
                        <tbody className="">
                        <tr>
                            <td className=" text-gray-400 py-2">Number of Pages:</td>
                            <td className="px-4 py-2 font-bold">281</td>
                        </tr>
                        <tr className="">
                            <td className=" text-gray-400 py-2">Publisher:</td>
                            <td className="px-4 py-2 font-bold">J.B. Lippincott & Co.</td>
                        </tr>
                        <tr>
                            <td className="text-gray-400 py-2">Year of Publishing:</td>
                            <td className="px-4 py-2 font-bold">1960</td>
                        </tr>
                        <tr className="">
                            <td className="text-gray-400 py-2">Rating:</td>
                            <td className="px-4 py-2 font-bold">4.8</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                <div className='my-5'>
                    <button onClick={()=>handleMarkAsRead(id)} className='btn mr-5 font-bold'>Read</button>
                    <button className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-bold'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;