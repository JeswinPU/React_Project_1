import React, { useEffect, useState } from 'react'
import '../../styles/Cart.css'


const Cart = () => {

  let [cartData, setCartData] = useState([])
  useEffect(() => {
    let first = fetch('http://localhost:4000/cart')
    let second = first.then((a) => {
      return (a.json())

    })
    second.then((a) => {

      setCartData(a)
    })
  }, [cartData])

  function removeFromCart(id , name) {
    let rem = window.confirm(`Do you wish to remove ${name} from cart?`)
    if (rem) {
      fetch(`http://localhost:4000/cart/${id}`, {method: "DELETE"})
      alert("Book removed succesfully")
    }
    else{
      alert(`The book ${name} is not removed`)
    }
  }
  return (
    <div id='BookBox'>
      {cartData.map((a) => {
        return (
          <div className='BookContainer'>
            <h1>{a.title}</h1>
            <button onClick={()=>{
              removeFromCart(a.id , a.title)
            }}>Remove from cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart
