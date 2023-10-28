import './App.css';
import { Route, Routes } from 'react-router-dom'
import Register from './register/Register';
import Login from './login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/register' element={ <Register/> } />
      <Route path='/login' element={ <Login/> }/>
      </Routes>
    </div>
  );
}

export default App;
