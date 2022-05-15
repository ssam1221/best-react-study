import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense.js/NewExpense';
import './App.css';

const DUMMY_EXPENSES = [{
  id: `el1`, title: `Car Insurance 1`, amount: 294.76, date: new Date()
},
{
  id: `el2`, title: `Car Insurance 2`, amount: 111.11, date: new Date()
},
{
  id: `el3`, title: `Car Insurance 3`, amount: 222.22, date: new Date()
},
{
  id: `el4`, title: `Car Insurance 4`, amount: 333.76, date: new Date()
},
{
  id: `el5`, title: `Car Insurance 5`, amount: 444.76, date: new Date()
}];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
