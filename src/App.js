import React from 'react';
import './App.css';
import {HolaMundo} from './HolaMundo'
import {NavBar} from './components/NavBar'



function App() {
  return (
    <div className="App">
      <NavBar /> {/* componente funcional */}
      <HolaMundo /> {/* componentes de clase */}
 
     
      

    </div>
  );
}

export default App;
