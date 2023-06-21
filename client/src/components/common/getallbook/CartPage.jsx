import React from 'react';

function CartPage({ cart, handleDownload, handleBackToBooks, setCart }) {
  const handleQuantityChange = (id, value) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + value };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <h1>Cart Items</h1>
      <div>
        {cart.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            {item.picture && <img src={`http://localhost:4000/${item.picture.path}`} alt={item.picture.filename} />}
            <button onClick={() => handleDownload(item._id)}>Download</button>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
            <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
            <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
            <hr />
          </div>
        ))}
      </div>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button style={{color:'white'}} onClick={handleBackToBooks}>Back to Books</button>
    </>
  );
}

export default CartPage;
