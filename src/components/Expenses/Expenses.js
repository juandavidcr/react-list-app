import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
const Expenses = (props) => {
  const [filteredYear,setFilteredYear] =useState('2020');
  const filterChangeHandler = selectedYear => {
    // console.log("Expenses.js");
     console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
    
  return (
    <div>
      
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
        {props.items.map(expense=><ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
          {/* <ExpenseItem  title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
          <ExpenseItem  title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
          <ExpenseItem  title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/> */}
      </Card>
    </div>
  )
}

export default Expenses