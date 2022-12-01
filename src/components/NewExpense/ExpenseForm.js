import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredCost,setEnteredCost] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event)=>{
        
        setEnteredTitle(event.target.value);
    };
    const costChangeHandler =  (event)=>{
        
        setEnteredCost(event.target.value);
    };
    const dateChangeHandler =  (event)=>{
        
        setEnteredDate(event.target.value);
    };
    const submitHandler= (event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredCost,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredCost('');
        setEnteredDate('');
    };
  return( 
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label forHtml='titulo'>Titulo de gasto </label>
                    <input type='text' name='titulo' value={enteredTitle} onChange={titleChangeHandler}/>
                    <label forHtml='cost'>Costo </label>
                    <input type='number' name='cost' value={enteredCost} min='0.01' step='0.01' onChange={costChangeHandler}/>
                    <label forHtml='fecha'>Date </label>
                    <input type='date' name='fecha' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button className='new-expense__actions'>
                    Agregar
                </button>
            </div>
        </form>
    );
    
};

export default ExpenseForm;
