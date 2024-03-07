'use server'

import { cookies } from "next/headers"

export async function getcookie(key: string){
  return cookies().get(key)?.value
}