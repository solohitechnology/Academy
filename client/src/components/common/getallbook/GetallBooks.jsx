// import React, { useEffect, useState } from 'react';
// import { ShoppingCart } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './product.css';

// const GetallBooks = () => {
//   // State variables
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartVisible, setCartVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/books/book1');
//         setProducts(Array.isArray(response.data) ? response.data : []);
//       } catch (error) {
//         console.log('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Add a product to the cart
//   const handleAddToCart = (product) => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCartItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
//     }
//   };

//   // Remove a product from the cart
//   const handleRemoveFromCart = (product) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== product.id)
//     );
//   };

//   // Increase the quantity of a product in the cart
//   const handleIncreaseQuantity = (product) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   // Decrease the quantity of a product in the cart
//   const handleDecreaseQuantity = (product) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === product.id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   // Clear the cart
//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   // Update local storage when cart items change
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Calculate the total price of items in the cart
//   const getTotalPrice = () => {
//     if (!cartItems || cartItems.length === 0) {
//       return 0;
//     }
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   // Calculate the total number of items in the cart
//   const cartItemCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   // Handle search input
//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle checkout button click
//   const handleCheckout = () => {
//     const totalPrice = getTotalPrice();
//     navigate(`/user/checkout?amount=${totalPrice}`);
//   };

//   return (
//     <div>
//       {/* Render products */}
//       <h2>Products</h2>
//      <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="product-grid">
//         {filteredProducts.map((product) => (
//           <div key={product.id} className="product-item">
//             <p>{product.name}</p>
//             <p>${product .price}</p>
//             <button
//               style={{ color: 'white' }}
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//             <ShoppingCart className="cart-icon" />
//           </div>
//         ))}
//       </div>

//       {/* Render cart */}
//       <div
//         className="cart-icon-container"
//         onClick={() => setCartVisible(!isCartVisible)}
//       >
//         <ShoppingCart className="cart-icon" />
//         {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
//       </div>
//       {isCartVisible && (
//         <div className="cart-container">
//           <div className="cart-content">
//             {cartItems.length > 0 ? (
//               <>
//                 {cartItems.map((item) => (
//                   <div style={{ marginTop: '60px' }} key={item.id}>
//                     <p>{item.name}</p>
//                     <p>Price: ${item.price}</p>
//                     <div
//                       style={{
//                         display: 'flex',
//                         textAlign: 'center',
//                         justifyContent: 'space-between',
//                       }}
//                     >
//                       <button
//                         style={{ color: 'white' }}
//                         onClick={() => handleIncreaseQuantity(item)}
//                       >
//                         +
//                       </button>
//                       <p style={{ color: 'green' }}>Quantity: {item.quantity}</p>
//                       <button
//                         style={{ color: 'white' }}
//                         onClick={() => handleDecreaseQuantity(item)}
//                       >
//                         -
//                       </button>
//                     </div>
//                     <div>
//                       <button
//                         style={{ color: 'white' }}
//                         onClick={() => handleRemoveFromCart(item)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//                 <p style={{ margin: '40px' }}>Total Price: ${getTotalPrice()}</p>
//                 <button
//                   style={{ color: 'white' }}
//                   className="checkout-button"
//                   onClick={handleCheckout}
//                 >
//                   Checkout
//                 </button>
//               </>
//             ) : (
//               <p>No items in the cart</p>
//             )}
//             <button style={{ color: 'white' }} onClick={handleClearCart}>
//               Clear Cart
//             </button>
//           </div> 
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetallBooks;
