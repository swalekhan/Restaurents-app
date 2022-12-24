import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CardContext from '../../store/card-context';

const HeaderCartButton = (props) => {
  const abc = useContext(CardContext);
  const numberOfCardItem = abc.items.reduce((curItem, item)=>{return curItem+item.amount},0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItem}</span>
    </button>
  );
};

export default HeaderCartButton;
