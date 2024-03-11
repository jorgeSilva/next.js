import { Roboto, DM_Serif_Display } from 'next/font/google'

export const font_body = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

export const font_display = DM_Serif_Display({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
})