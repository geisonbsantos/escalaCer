import React from 'react';
import './style.css';

function Main() {
  return (
    <div className="App-header">
      <h4>Sistema troca de escala</h4>
      <p>Entre com suas credenciais</p>
      <div className='formLogin'>
        <input className='login' type='text' placeholder='Digite seu login'></input>
        <input className='login' type='password' placeholder='Digite sua senha'></input>
        <button className='button'>Login</button>
      </div>
    </div>
  );
}
  
export default Main;