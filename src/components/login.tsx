'use client'

import React from "react"

export default function Login(){

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const username = e.currentTarget.username.value
    const password = e.currentTarget.password.value
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    if(response.ok) window.location.href = "/"
   }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input type="text" id="username" name="username"/>

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password"/>

      <button>Login</button>
    </form>
  )
}