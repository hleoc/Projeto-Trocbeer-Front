import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// hooks customizado
const useInput = (initial) => {
  const [state, setState] = useState(initial);
  const handleChange = (event) => setState(event.target.value);
  return [state, handleChange];
};

const axiosLogin = async (email, password) => {
  const resposta = await axios.post('http://localhost:3001/login', { email, password })
  return resposta;
};

export default function Login () {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('token');
  }, [])
  const [email, setEmail] = useInput('');
  const [passsword, setPassword] = useInput('');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isValidEmail = emailRegex.test(email.toLowerCase());
  const isValidPassword = passsword.length > 5;
  return (
    <div className="login">
      <h1 className="title-login">PROJETO TROCBEER</h1>
      <h2 className="sub-title-login">LOGIN</h2>
      <form action="">
        <fieldset className="email">
          <label htmlFor="">Email:</label><br/>
          <input value={email} onChange={setEmail} type="text"/>
        </fieldset>
        <fieldset className="password">
          <label htmlFor="">Password:</label><br/>
          <input value={passsword} onChange={setPassword} type="password"/>
        </fieldset>
        <button className="btn-login" disabled={!(isValidEmail && isValidPassword)} onClick={ async (event) => {
          event.preventDefault();
          const response = await axiosLogin(email, passsword)
          if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            return history.push('/home')
          }
        } }>Login</button>
        <button className="btn-register" onClick={() => history.push('/register')}>Register</button>
      </form>
    </div>
  );
};
