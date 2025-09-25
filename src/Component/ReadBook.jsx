import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadBook = () => {

    let [bookData, setBookData] = useState()
    let bookurl = useParams()
    
    useEffect(() => {
        let furst = fetch(`http://localhost:4000/books/${bookurl.id}`)
        let second = furst.then((a) => {
            return (a.json())
        })
        second.then((a) => {
            setBookData(a)
        })
    }, [bookurl.id])

    console.log(bookData);
    

    return (
        <div id='ContentBox'>
            {bookData ? (<div id="headinBox">
                <h1>{bookData.title}</h1>
                <h2>{bookData.authors} ,</h2>

            </div>) : (<div id='loadingScreen'><h1>LOADING</h1></div>)}

        </div>
    )
}

export default ReadBook
