import logo from './logo.svg';
import './App.css';

const hola = () => {
  return <h1>Hola mundo</h1>
}

function App() {
  return (
    <div>
      {hola()}
    </div>
  )
 
}

export default App;
