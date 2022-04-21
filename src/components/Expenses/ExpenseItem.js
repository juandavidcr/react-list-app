import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem=(props) => {
  let title = props.title;
  const clickHandler = () =>{
    title="updated";
    console.log(title,"clicked!!!!!!!")
  };

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