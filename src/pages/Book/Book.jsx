import React, {  } from 'react';
import { IoIosStarHalf } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    

    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,
            yearOfPublishing,} =singleBook;
    
    return (
        <Link to={`/BookDetails/${bookId}`}>
                <div className="card bg-base-100  shadow-sm border-1 border-gray-200 rounded-lg p-6">
                    <figure className='p-3  bg-gray-200 w-2/3 mx-auto'>
                        <img
                        className='h-[160px]'
                        src={image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-10 text-green-500'>
                            {
                                tags.map(tag=><button>{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title font-bold ">
                        {bookName}
                        <div className="badge badge-secondary ">{yearOfPublishing}</div>
                        </h2>
                        <p>Book by : {author}</p>
                        <div className='border-t-2 border-dashed'></div>
                        <div className="card-actions justify-between my-2">
                        <div className="">{category}</div>
                        <div className="badge ">{rating}<IoIosStarHalf /></div>
                        </div>
                    </div>
                </div>
        </Link>
    );
};

export default Book;