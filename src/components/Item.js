import { useState } from 'react';
import '../App.css';
import firebase from 'firebase';
import {firestore} from './config.js';

function Item(props) {
  const [add,setAdd] = useState(false);
  
  const itemUpdate = async() => {
    setAdd(true);
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
          items : firebase.firestore.FieldValue.arrayUnion(obj)
      }
  );
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
            <button className='item-button' onClick={itemUpdate}>{add ? 'Added' : 'Add To Cart'}</button>
    </div>
  );
}

export default Item;
