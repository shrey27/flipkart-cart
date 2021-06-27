import '../App.css';
import firebase from 'firebase';
import {firestore} from './config.js';

function SavedItem(props) {
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
        items : firebase.firestore.FieldValue.arrayRemove(obj)
    });
    var num = 0;
    await firestore.collection('cartitems').doc('cart').get().then((_doc) => {
      const data = _doc.data();
      num = (data['total'])
    }) 
    await firestore.collection('cartitems').doc('cart').update(
      {
          items : firebase.firestore.FieldValue.arrayUnion(obj),
          total:  (num + obj.price)
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
            <button className='item-button' onClick={itemUpdate}>Add To Cart</button>
    </div>
  );
}

export default SavedItem;
