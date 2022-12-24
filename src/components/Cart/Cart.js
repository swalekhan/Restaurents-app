import Modal from '../UI/Modal';
import classes from './Cart.module.css';
// import { useContext } from 'react';
const Cart = (props) => {
  const cardItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}<button> - </button><button> + </button> <hr/></li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
