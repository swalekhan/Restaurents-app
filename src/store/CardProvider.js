import CardContext from "./card-context";
import { useReducer } from "react";
 
const defaultCardState = {
    items: [],
    totalAmount:0
}

const cardReducer = (state, action)=>{
    if(action.type === "Add"){
        const  updatesdItems = state.items.concat(action.item) 
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updatesdItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCardState;
}
const CardProvider = (props) =>{
    
    const [cardState, dispatchCardAction] = useReducer(cardReducer,defaultCardState)

     const addItemToHandler = (item) =>{
        dispatchCardAction({type:"Add", item:item})
     };

     const removeItemFromHandler = (id) =>{
       dispatchCardAction({type:"remove", id:id})
     };

    const cardContext = {
        items:cardState.items,
        totalAmount:cardState.totalAmount,
        addItem: addItemToHandler,
        removeItem:removeItemFromHandler
    }

     return (
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
     )
}
export default CardProvider;