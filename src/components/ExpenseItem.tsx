import StyleItem from "./ExpenseItemStyle";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    return (
      <>
        <StyleItem>
          <div className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
              <h2>{props.expense.name}</h2>
              <div className="expense-item__price">${props.expense.amount}</div>
            </div>
          </div>
        </StyleItem>
      </>
    );
  }
  