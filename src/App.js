import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [rickMortyChars, setRickMortyChars] = useState({});

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getCharsFromRick = (() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setRickMortyChars(response.data.results);
        console.log(response.data);
      })
      .catch(err => { console.log(err) });
  })

  useEffect(() => {
    getCharsFromRick();
  }, [])

  console.log(rickMortyChars);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
