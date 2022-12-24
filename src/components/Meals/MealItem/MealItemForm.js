import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef } from 'react';
const MealItemForm = (props) => {
    let inputRef = useRef();
  const submitHandler = (e)=>{
     e.preventDefault();
     const enterAmonut = inputRef.current.value;    // alway is string 
     const numberEnterAmount = +enterAmonut;
     if(enterAmonut.trim().length === 0 || numberEnterAmount<1 || numberEnterAmount>5){
           return;
     }
     props.onAddToCard(numberEnterAmount)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref = {inputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
