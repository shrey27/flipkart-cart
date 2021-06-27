import '../App.css';
import { useEffect, useState } from 'react';
import Item from './Item';
import {firestore} from './config.js';

function SaveForLater() {
  const [items,setItems] = useState([]);  

  const getCartItems = async() => {
    var notes = [];
    await firestore.collection('cartitems').doc('later').get().then((_doc) => {
        const data = _doc.data();
        notes = (data['items']);
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    setItems(notes);
};

  useEffect(()=>{
    getCartItems();
  });

  return (
    <div className="content">
        <div>
            <div className="items">
            {
                items.map((item) => ( <Item key={item.id} {...item}/>))
            }
            </div>
        </div>

    </div>
  );
}

export default SaveForLater;

