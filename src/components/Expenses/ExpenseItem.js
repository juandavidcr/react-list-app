import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const clickHandler = () =>{
  console.log("clicked!!!!!!!")
};
const ExpenseItem=(props) => {
 

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>
                $ {props.amount}
            </div>
            <button onClick={clickHandler}>Cambiar titulo</button>
        </div>
    </Card>
  )
}
export default ExpenseItem;