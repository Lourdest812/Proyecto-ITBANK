import './css/index.css';
import Login from "./login/Login";
import MainPage from "./mainPage/MainPage";
import Register from "./login/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useReducer, useEffect } from 'react';
import { AppContext } from './AppContext'


const InitialState = {
  dollarCotization: null,
};

const reducer = (state, action) => {
  switch(action.type) {
    case "updateDollarCotization":
      return { ...state, dollarCotization: action.dollarCotization };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, InitialState);


  // Obtencion de cotización del dólar
  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "updateDollarCotization", dollarCotization: data.rates.ARS });
      });
  }, []);
  

  const context = {
    ...state,
  }


  return (
    <AppContext.Provider value={context}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/inicio" element={<MainPage/>} />
          <Route path="/registro" element={<Register/>} />
        </Routes>
      </Router>
    </AppContext.Provider>

  );
}

export default App;
