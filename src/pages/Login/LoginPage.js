import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
    const isAuthenticated = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("token", "token")
        setTimeout(()=> navigate('/home'), 500) 
    }

    useEffect(() => {
       if(isAuthenticated){
          navigate('/home')
       }
    }, [])
    

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(process.env.REACT_APP_HOST + '/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      setTimeout(()=>navigate('/home'), 1000)
    } catch (err) {
      console.error(err);
      alert('Invalid email or password');
    }
  };
  console.log('login')
  return (
    <div className="signup-page">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        <button type="submit" onClick={handleSubmit}>Log in</button>
      </form>
      <p>New User? <NavLink to="/signup">Please sign up</NavLink></p>
    </div>
  );
}

export default LoginPage;
