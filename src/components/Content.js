import '../App.css';
import { useEffect, useState } from 'react';
import ItemList from '../Items/ItemList.json';
import Item from './Item';

function Content() {
  const [items,setItems] = useState([]);  
  useEffect(()=>{
    setItems([...ItemList]);
  },[setItems]);

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

export default Content;

