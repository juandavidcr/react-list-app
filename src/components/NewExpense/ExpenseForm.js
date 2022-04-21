import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{

  return( 
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label forHtml='titulo'>Titulo de gasto </label>
                    <input type='text' name='titulo'/>
                    <label forHtml='cost'>Costo </label>
                    <input type='number' name='cost' min='0.01' step='0.01'/>
                    <label forHtml='fecha'>Date </label>
                    <input type='date' name='fecha' min='2019-01-01' max='2022-12-31' />
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
