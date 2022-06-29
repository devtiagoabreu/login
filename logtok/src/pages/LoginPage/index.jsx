import React, { useState, useContext } from "react"

import { AuthContext } from "../../contexts/auth"

import "./styles.css"

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit", { email, password })
    login(email, password) //integração com o contexto | api
  }

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <p>{String(authenticated)}</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}  
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Digite sua senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}  
          />
        </div>
        <div className="actions" id="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>

  )
}

export default LoginPage