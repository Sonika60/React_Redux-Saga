import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect, useState, useRef } from 'react';

import onewimActions from '../redux/onewimActions'
import {onewimFruit, productData} from '../redux/selectors'



function Main() {
  const ref = useRef(null);

  const dispatch = useDispatch();

  let products = useSelector(productData);
  const fruitName = useSelector(onewimFruit)
  
  const {payload} = fruitName
  const [value, setValue] = useState(payload);
  const [disable, setDisabled] = useState(false);


  const UpdatedFieldValue = (e) =>{
   const fruit = e.target.value
    dispatch(onewimActions.updateVarifivationData(fruit, "fruit"))
  }

  const submitData = (e) =>{
    e.preventDefault();
   dispatch(onewimActions.submitData())
  //  navigate("/cart")
  }

  useEffect(()=>{
    dispatch(productList())
    if (document.activeElement === ref.current) {
      console.log('element has focus');
    } else {
      console.log('element does NOT have focus');
    }
   
  },[])

  function handleKeyDown(e) {
    if (e.key === "Tab") {
      if (document.activeElement === ref.current) {
        console.log('element has focus');
        setDisabled(true)
      } else {
        console.log('element does NOT have focus');
      }
    }
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <h1> Home</h1>
      <div>
      <button ref = {ref} onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <form onSubmit = {submitData} data-testid = "changeValue">
         <select value={value} 
         onChange={UpdatedFieldValue} 
         >
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
          <input type="submit" disabled = {!disable} value="Submit" />
  <p>{payload}</p>
          </form>  
      <div className='product-container'>
        {
          products.map((item)=><div className='product-item'>
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button id  = "addToCart" onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
