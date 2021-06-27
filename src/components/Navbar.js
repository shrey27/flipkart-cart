import '../App.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href='/'>
      <img width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" 
     alt="Flipkart" title="Flipkart" class="_2xm1JU" />       
      </a>
     {/* <input type='text' placeholder='search' length='20px'/> */}
      <div className='navbar-end'>
          {/* <button>Save for Later</button> */}
          <a href="/saveforlater">
            <span className='icons-name'> Save for later</span>
          </a>
          <a href="/cart">
            <span className='icons-name'> Cart</span>
          </a>
      </div>
    </div>
  );
}

export default Navbar;
