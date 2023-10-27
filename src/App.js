import Register from './pages/Register';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={ <Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
