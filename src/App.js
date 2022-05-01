import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses'; 

function App() {

  const expenses = [{
    id: `el1`, title: `Car Insurance`, amount: 294.76, date: new Date()
  },
  {
    id: `el2`, title: `Car Insurance`, amount: 111.11, date: new Date()
  },
  {
    id: `el3`, title: `Car Insurance`, amount: 222.22, date: new Date()
  },
  {
    id: `el4`, title: `Car Insurance`, amount: 333.76, date: new Date()
  },
  {
    id: `el5`, title: `Car Insurance`, amount: 444.76, date: new Date()
  }]
  return (

    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
