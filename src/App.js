import ExpenseItem from "./components/ExpenseItem";

function App() {
  
  const expenses = [
    {id:'0001',title:"Seguro de AUTO",amount:299.99,date:new Date(2022,3,13)},
    {id:'00012',title:"Seguro de VIDA",amount:199.99,date:new Date(2022,3,13)},
    {id:'00013',title:"Seguro de GMM",amount:499.99,date:new Date(2022,3,13)},
  ];
  return (
     <div>
      <h2>Let's get started!</h2>
      <ExpenseItem  title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem  title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      
    
    </div>
  );
}

export default App;
