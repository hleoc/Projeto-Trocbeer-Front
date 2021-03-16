import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useInput = (initial) => {
  const [state, setState] = useState(initial);
  const handleChange = (event) => setState(event.target.value);
  return [state, handleChange];
};

const axiosRegister = async (name, email, password) => {
  try {
    const resposta = await axios.post('http://localhost:3001/users', { name, email, password });
    return resposta;
  } catch (error) {
    return { status: 409 };
  }
};

export default function Register() {
  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  const [email, setEmail] = useInput('');
  const [passsword, setPassword] = useInput('');
  const [name, setName] = useInput('');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isValidEmail = emailRegex.test(email.toLowerCase());
  const isValidPassword = passsword.length > 5;
  const isValidName = name.length > 5;
  return (
    <div>
      <h1>REGISTER</h1>
      <form action="">
        <fieldset>
          <label htmlFor="">Name:</label>
          <br />
          <input type="text" value={name} onChange={setName} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Email:</label>
          <br />
          <input type="text" value={email} onChange={setEmail} />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password:</label>
          <br />
          <input type="password" value={passsword} onChange={setPassword} />
        </fieldset>
        <button
          onClick={async (event) => {
            event.preventDefault();
            const response = await axiosRegister(name, email, passsword);
            if (response.status === 409) {
              return alert('Email já utilizado!');
            }
            if (response.status === 200) {
              history.push('/login');
            }
          }}
        >
          Confirm
        </button>
        <button onClick={() => history.push('/')}>Cancel</button>
      </form>
    </div>
  );
}
