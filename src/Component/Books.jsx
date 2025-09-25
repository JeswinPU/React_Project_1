import React, { useEffect, useState } from 'react'
import '../styles/Book.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Books = () => {

    let [Book, setBook] = useState([])

    useEffect(() => {
        let first = fetch('http://localhost:4000/books')
        let second = first.then((a) => {
            return (a.json())

        })
        second.then((a) => {

            setBook(a)

        })
    }, [Book])

    let nav = useNavigate()
    let loc = useLocation()
    let adminaccess = loc.pathname.startsWith('/adminportal')
    let useraccess = loc.pathname.startsWith('/userportal')
    function DeleteBook(Bname, Bid) {
        let delconf = window.confirm(`Do you want to delete ${Bname}`)

        if (delconf) {
            fetch(`http://localhost:4000/books/${Bid}`, { method: "DELETE" })
        }
        else {
            alert(`Book ${Bname} is not Deleted`)
        }
    }

    function addToCart(Bname, Bid, Bimg) {
        let cartconf = window.confirm(`Do you wish to add ${Bname} to cart?`)
        if (cartconf) {
            let newCart = {
                "id": Bid,
                "title": Bname,
                "image": Bimg
            }
            fetch('http://localhost:4000/cart', {
                method: "POST",
                headers: { "Content-Type": "applicaiton/json" },
                body: JSON.stringify(newCart)
            })
            alert("Book has been added to Cart")
        }
        else {
            alert("Book not added to cart")
        }

    }
    return (
        <>
            <h1 id='as'>BROWSE THROUGH OUR BEST COLLECTION OF BOOKS</h1>
            <div id='mainbox'>
                {Book.map((a) => {
                    return (
                        <div className='BookBox'>
                            <div id="img">
                                <img src={a.thumbnailUrl} alt="" />
                            </div>
                            <div id='BookContent'>
                                <h1>{a.title}</h1>
                                <h2>{a.authors + ", "}</h2>
                            </div>
                            <button onClick={() => {
                                if (loc.pathname === "/adminportal/books") {
                                    nav(`/adminportal/readbook/${a.id}`)
                                }
                                else {
                                    nav(`/userportal/readbook/${a.id}`)
                                }
                            }}>View More</button>
                            <br />
                            {(adminaccess) ? (<button onClick={() => {
                                DeleteBook(a.title, a.id)
                            }}>Delete Book</button>) : (<></>)}
                            {(useraccess) ? (<><button onClick={() => {
                                addToCart(a.title, a.id, a.thumbnailUrl)
                            }}>Add to Cart</button></>) : (<></>)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Books
