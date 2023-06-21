import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import './book.css';

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBookFound, setBookFound] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    fetchFiles();
  }, [searchQuery]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/books/book1', {
        params: {
          search: searchQuery
        }
      });
      setFiles(response.data.files);
      setBookFound(response.data.files.length > 0);
      console.log(response.data.files);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item._id !== product._id)
    );
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item._id === product._id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleToggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  const handleCheckout = () => {
    const totalPrice = getTotalPrice();
    navigate(`/user/checkout?amount=${totalPrice}`);
  };

  return (
    <div className='books'>
      <h2>BOOKS/</h2>

      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by book name"
        />
      </div>

      <div className="container1">
        {files.length === 0 && !isBookFound ? (
          <p className="file-not-found-message">Book not found.</p>
        ) : (
          files
            .filter((file) =>
              file.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((file) => (
              <div className="items1" key={file._id}>
                <p>{file.name}</p>
                {file.picture && (
                  <img
                    src={`http://localhost:4000/uploads/${file.picture.filename}`}
                    alt={file.name}
                  />
                )}
                <p>${file.price}</p>
                <button
                  style={{ color: 'white' }}
                  onClick={() => handleAddToCart(file)}
                >
                  Add to Cart
                </button>
              </div>
            ))
        )}
      </div>

      <div className="cart-icon" onClick={handleToggleCart}>
        <span className="cart-count">{cartItemCount}</span>
        <ShoppingCart />
      </div>

      {isCartVisible && (
        <div className="cart-container">
          <div className="cart-content">
            <h2>Cart</h2>
            <p>Total Price: ${getTotalPrice()}</p>
                <button
                  onClick={handleCheckout}
                  style={{ color: 'white' }}
                  className="checkout-button"
                >
                  Checkout
                </button>
                <button style={{ color: 'white' }} onClick={handleClearCart}>
                  Clear Cart
                </button>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <div className='mobilecart' key={item._id}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    {item.picture && (
                      <img
                        src={`http://localhost:4000/uploads/${item.picture.filename}`}
                        alt={item.name}
                      />
                    )}

                    <div>

                    <button
                      style={{ color: 'white' }}
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove Item from Cart
                    </button>
                    <button
                      style={{ color: 'white' }}
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      style={{ color: 'white' }}
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
