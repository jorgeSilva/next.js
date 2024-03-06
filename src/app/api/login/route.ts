import { cookies } from "next/headers"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest){
  const body = await request.json() as {username: string, password: string}
   
  const response = await fetch('https://api.origamid.online/conta/login', {
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({
      username: body.username,
      password: body.password
    })
  })

  if(!response.ok) {
    Response.json({ autorizado: false, error: 'Dados incorretos.'}, {status: 401})
  }

  const data = await response.json()

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true
  })

  return Response.json({autorizado: true})
} 