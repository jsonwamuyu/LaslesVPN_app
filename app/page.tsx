import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import Burnner from './conponents/Burnner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Burnner />
    </>
  )
}
