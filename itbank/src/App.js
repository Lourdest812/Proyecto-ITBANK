//import './App.css';
import Login from "./login/Login";
import Test from "./login/Test";
import Logo from './assets/img/bxs-bank.svg'
import './css/login.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./login/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inicio" element={<Test/>} />
        <Route path="/registro" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
