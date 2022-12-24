import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CardContext from '../../../store/card-context';
const MealItem = (props) => {
  const abc = useContext(CardContext);
  const price = `$${props.price.toFixed(2)}`;
      
    const onAddToCard = (amount)=> {
    abc.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price: props.price
    })
    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCard = {onAddToCard} />
      </div>
    </li>
  );
};

export default MealItem;
