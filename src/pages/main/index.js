import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import './style.css';

function Main() {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", {email, password});

    login(email, password);
  };

  return (
    <div className="App-header">
      <h4>Sistema troca de escala</h4>
      <p>Entre com suas credenciais</p>
      <p>{String(authenticated)}</p>
      <div className='formLogin'>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            className='login' 
            type='email' 
            name='email' 
            placeholder='Digite seu login' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            className='login' 
            type='password' 
            name='password' 
            placeholder='Digite sua senha' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='button' type='submit'>Login</button>
          <button className='button2'>Cadastrar-me</button>
        </form>
      </div>
    </div>
  );
}
  
export default Main;