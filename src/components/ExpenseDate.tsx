
import StyleItem from "./ExpenseItemStyle";

export default function ExpenseDate(props) {

    const year = props.date.toLocaleDateString('pt-BR', { year: '2-digit'});
    const month = props.date.toLocaleDateString('pt-BR', { month: 'long'})
    const day = props.date.toLocaleDateString('pt-BR', { day: '2-digit'})

    return (
        <StyleItem>
        <div className="dataGasto"> 
            <div>{day}</div>
            <div>{month}</div>
            <div className="year">{year}</div>
        </div> 
        </StyleItem>
    )

}