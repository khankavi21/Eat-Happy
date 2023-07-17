import React, { useEffect, useState, useRef } from 'react'
import { useCart, useDispatchCart } from './ContextReducer'

export default function Card(props) {

  let data = useCart();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options);

  let dispatch = useDispatchCart();

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return

      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        //  console.log(data)
        return  
      }
      return
    }
    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(options[size]);


  return (
    <div >
      <div className="card mt-3" style={{ "width": "18rem" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
        <div className="card-body  Cardbody">
          <h5 className="card-title text-dark" >{props.foodItem.name}</h5>
          <p className="card-text"></p>
          <div className='container '>
            <select className='m-2 h-100 fs-5 rounded' onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            <select className='m-2 h-200 fs-5 rounded  ' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {
                priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })
              }
            </select>

            <div className='d-inline h-100 fs-5 text-dark'>
              <br />
              Rs.{finalPrice}/-
            </div>
          </div>
          <hr />
          <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
