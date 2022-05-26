import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1> Escala Cer</h1>
        <p>Sistema troca de escala</p>
        <div className='formLogin'>
        <input className='login' type='text' placeholder='Digite seu login'></input>
        <input className='login' type='password' placeholder='Digite sua senha'></input>
        <button className='button'>Login</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
