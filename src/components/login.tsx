'use client'

import { login } from "@/actions/login"
import React from "react"

export default function Login(){

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const username = e.currentTarget.username.value
    const password = e.currentTarget.password.value
    const response = await login(username, password)
    console.log(response);
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