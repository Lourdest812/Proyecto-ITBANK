import '../css/globals.css'
import '../css/login.css'
import '../css/mainPage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../AppContext'


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

function MyApp({ Component, pageProps }) {

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
    {/* Layout por default */}
    <Header />
    <Component {...pageProps} />
    <Footer />
  </AppContext.Provider>
  )
}

export default MyApp