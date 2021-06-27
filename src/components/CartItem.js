import { useState } from 'react';
import '../App.css';
import firebase from 'firebase';
import {firestore} from './config.js';

function CartItem(props) {
  const [count,setCount] = useState(1);
  const {setTotalPrice, totalPrice, remove, setRemove} = props;
  
  const removeItem = async() => {
    const obj = {
      "id":props.id,
      "brand":props.brand,
      "name":props.name,
      "image":props.image,
      "size":props.size,
      "for":props.for,
      "price":props.price
      }
    await firestore.collection('cartitems').doc('cart').update(
      {
          items : firebase.firestore.FieldValue.arrayRemove(obj),
          total:  (totalPrice - obj.price*count)
      });
    setRemove(!remove);
    setTotalPrice(totalPrice - obj.price*count);
  }

  const itemUpdate = async() => {
    const obj = {
        "id":props.id,
        "brand":props.brand,
        "name":props.name,
        "image":props.image,
        "size":props.size,
        "for":props.for,
        "price":props.price
    }
    await firestore.collection('cartitems').doc('later').update(
      {
          items : firebase.firestore.FieldValue.arrayUnion(obj)
      });
    removeItem();
  }

  const countUpdate = (event) =>{
    if(event.target.value==='+'){
      setCount(count+1);
      setTotalPrice(totalPrice + props.price );
    }
    else{
      if(count>1)
      {
        setCount(count-1);
        setTotalPrice(totalPrice - props.price );
      } 
    }
  }

  return (
    <div className="item">
            <img src={props.image} alt={props.name}/>
            <section className="item-info">
                <p>{props.brand}</p>
                <p>{props.name}</p>
                <p>{props.size}</p>
                <p>{props.for}</p>
                <p>{props.price}</p>
            </section>
            <div className='quantity'>
              <label>Quantity</label>
              <span> {count}</span>
              <div>
                  <button value='+' onClick={(e)=>countUpdate(e)}>+</button>
                  <button value='-' onClick={(e)=>countUpdate(e)}>-</button>
              </div>
            </div>
            <button className='item-button' onClick={itemUpdate}>Save for Later</button>
            <button className='item-button' value={props.id} 
            onClick={removeItem}>Remove Items</button>
    </div>
  );
}

export default CartItem;
