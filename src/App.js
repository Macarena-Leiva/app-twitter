import React from 'react';
import './App.css';
import {Explore} from './components/Explore'
import {NavBar} from './components/NavBar'
import {Main} from './components/Main'



function App() {
  return (
    <div className="app">
      <NavBar /> {/* componente de clase */}
      <Main />  {/* componente de clase */}
      <Explore />  {/* componentes de clase */}
 
    </div>
  );
}

export default App;
