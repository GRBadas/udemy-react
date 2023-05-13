import StyleItem from "./ExpenseItemStyle";

 export default function ExpenseItem (props) {
    const year = props.date.toLocaleDateString('pt-BR', { year: '2-digit'});
    const month = props.date.toLocaleDateString('pt-BR', { month: 'long'})
    const day = props.date.toLocaleDateString('pt-BR', { day: '2-digit'})

    return (
        <>
        <StyleItem>
        <div className="expense-item">
            <div className="dataGasto"> 
                <div>{day}</div>
                <div>{month}</div>
                <div className="year">{year}</div>
            </div> 
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
        </StyleItem>
        </>
    )
 }

 