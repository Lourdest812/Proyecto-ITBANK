import './css/index.css';
import Login from "./login/Login";
import MainPage from "./mainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./login/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inicio" element={<MainPage/>} />
        <Route path="/registro" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
