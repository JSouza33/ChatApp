import './App.css'; 
import {useState} from 'react' 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'
function App() {   
  const [isRegistered, setIsRegistered] = useState<Boolean>(true)
  
  return (
    <div className="App">  
    {isRegistered ? <Login/> : <Register/>}
    </div>
  );
}

export default App; 

