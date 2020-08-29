import React, { useState } from "react";
import fetchData from '../../utils/fetch/fetchData';

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logUserIn = ()=> {
      fetchData().fetchUserData.login({email: email, password: password}, ()=>{
        props.history.push('/profile');
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={()=> logUserIn(email, password)}>Login</button>
    </div>
  );
}
