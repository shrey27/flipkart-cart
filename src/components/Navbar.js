import '../App.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <a href='/'>
      <img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
     alt="Flipkart" title="Flipkart" class="_2xm1JU" />       
      </a>
     {/* <input type='text' placeholder='search' length='20px'/> */}
      <div className='navbar-end'>
          <Link className='link' to='/saveforlater'> Save for later </Link>
          <Link className='link' to='/cart'> Cart </Link>
      </div>
    </div>
  );
}

export default Navbar;
