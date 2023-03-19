import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'

function SignupPage() {
    const isAuthenticated = !!localStorage.getItem('token');
    const navigate = useNavigate()
    useEffect(() => {
        if(isAuthenticated){
         navigate('/home')
        }
     }, [])

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
     const handleNameChange = (event) => {
       setName(event.target.value);
     };
   
     const handleEmailChange = (event) => {
       setEmail(event.target.value);
     };
   
     const handlePasswordChange = (event) => {
       setPassword(event.target.value);
     };
   
     const handleSubmit = async (event) => {
       event.preventDefault();
       try {
         await axios.post(process.env.REACT_APP_HOST + '/register', { name, email, password });
         alert('Registration successful');
         window.location.href = '/login';
       } catch (err) {
         console.error(err);
         alert('Registration failed');
       }
     };
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={name} onChange={handleNameChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      <p>Already a user? <a href="/signin">Please sign in</a></p>
    </div>
  );
}

export default SignupPage;
