import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './style.css';

function Login() {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }
  return (
    <div className="App-header">
        
    <h4>Sistema troca de escala 2</h4>
    <p>Entre com suas credenciais</p>
    <p>{String(authenticated)}</p>
    <div className='formLogin'>
        <input className='login' type='text' placeholder='Digite seu login'></input>
        <input className='login' type='password' placeholder='Digite sua senha'></input>
        <button className='button'>Login</button>
        <button className='button2' onClick={ handleLogout }>Logout</button>
      </div>
    </div>
  );
}

export default Login;