import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [rickMortyChars, setRickMortyChars] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getCharsFromRick = (() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setRickMortyChars(Object.values(response.data.results));
        console.log(Object.values(response.data.results));
      })
      .catch(err => { console.log(err) });
  })

  useEffect(() => {
    getCharsFromRick();
  }, [])

  console.log(rickMortyChars);
  if (rickMortyChars === null) {
    return (
      <h2>LOADING...</h2>
    )
  }
  else {
    return (
      <div className="App">
        <img alt={'logo'} src={require('./images/logo.png')}></img>
        <h1 className="Header">Characters</h1>
        {rickMortyChars.map((char, index )=> 
        { return <Character key={index} data={char} /> })}
      </div>
    );
  }
}
export default App;
