import {useState} from 'react';

function App() {
  const [name, setName] = useState("Guest");
  function renderName(event) {
    setName(event.target.value);
  }

  const [quantity, setQuantity] = useState(1);
  function renderQuantity(event) {
    setQuantity(event.target.value);
  }

  const [comment, setComment] = useState();
  function renderComment(event){
    setComment(event.target.value);
  }

  const [payment, setPayment] = useState();
  function renderPayment(event){
    setPayment(event.target.value);
  }
  const [shipping, setShipping] = useState("Delivery");
  function renderShipping(event){
    setShipping(event.target.value);
  }
  return (
    <>
      <input onChange={renderName}/>
      <p>name: {name}</p>
      <input type="number" onChange={renderQuantity}/>
      <p>quantity: {quantity}</p>
      <textarea onChange={renderComment}></textarea>
      <p>comment: {comment}</p>
      <select onChange={renderPayment}>
        <option value="">select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">Mastercard</option>
        <option value="giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={renderShipping}/>
        Pick Up
      </label><br/>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={renderShipping}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  )
}

export default App
