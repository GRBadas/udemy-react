import StyleItem from "./ExpenseItemStyle";
import ExpenseDate from "./ExpenseDate";

 export default function ExpenseItem (props) {


    return (
        <>
        <StyleItem>
        <div className="expense-item">
        <ExpenseDate />
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
        </StyleItem>
        </>
    )
 }

 