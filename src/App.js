import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
    {id:'0001',title:"Seguro de AUTO",amount:299.99,date:new Date(2022,3,13)},
    {id:'0002',title:"Seguro de VIDA",amount:199.99,date:new Date(2022,3,13)},
    {id:'0003',title:"Seguro de GMM",amount:499.99,date:new Date(2022,3,13)},
  ];
  const App=() =>{
  const [expenses,setExpenses] =useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses];
    });
  };
  return (
     <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
