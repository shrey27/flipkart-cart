import '../App.css';
import { useCallback, useEffect, useState } from 'react';
import CartItem from './CartItem';
import {firestore} from './config.js';

function Content() {
 
  const [items,setItems] = useState([]);
  const [remove, setRemove] = useState(false);
  const [totalPrice,setTotalPrice] = useState(0);
  
  const getCartItems = useCallback(async() => {
    var notes = [];
    await firestore.collection('cartitems').doc('cart').get().then((_doc) => {
        const data = _doc.data();
        notes = (data['items']);
        setTotalPrice(data['total']);
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    setItems(notes);
    console.log(remove)
  },[remove]);
  
  useEffect(()=>{ 
    getCartItems();
    console.log('1');
    return function cleanup() {
      console.log('');
      };
  },[getCartItems]);

  return (
    <div className="content">
        <div>
            <div>Total No. of Items: {items.length}</div>
            <div>Total Price of items: {totalPrice}</div>
            <div className="items">
            {
                items.map((item) => ( <CartItem key={item.id} {...item} 
                  totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                  remove={remove} setRemove={setRemove}/>)) 
            }
            </div>
        </div>

    </div>
  );
}

export default Content;

