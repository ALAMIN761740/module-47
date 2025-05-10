import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';




const ListedBooks = () => {


    const [readList,setReadList]=useState([])
    const [sort,setSort]=useState("");



    const data = useLoaderData();
    console.log(data);

    useEffect(() =>{
        const storedBookdata = getStoredBook();
        const ConvertedStoredBooks = storedBookdata.map(id => parseInt(id))
        const myReadList = data.filter(book=>ConvertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
},[])


    const handleSort = (type) => {
        setSort(type)
        if(type==="Pages"){
            const sortedByPage=[...readList].sort((a,b)=>a.totalPages - b.totalPages)
            setReadList(sortedByPage)
        }
        if(type==="ratings") {
            const sortedByrating= [...readList].sort((a,b)=>a.rating-b.rating);
            setReadList(sortedByrating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by:{sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readList.length}</h2>
                    {
                        readList.map(b=><Book key={b.bookId} singleBook={b} ></Book>)
                    }
                </TabPanel>
                <TabPanel>
                <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;