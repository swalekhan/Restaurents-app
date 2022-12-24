import CardContext from "./card-context";

const CardProvider = (props) =>{
     const addItemToHandler = () =>{};
     const removeItemFromHandler = () =>{};

    const cardContext = {
        items:[],
        totalAmount:0,
        add: addItemToHandler,
        remove:removeItemFromHandler
    }

     return (
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
     )
}
export default CardProvider;