import { useState } from "react";

function Login() {
  return (
    <div>
      <h1>WELCOME TO LOGIN PAGE</h1>
       {errorMessage && <p className='error'>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" value={username} onChange={handleUserNameChange}/>
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
          <br />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
