import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import Burnner from './conponents/Burnner'
import Features from './conponents/Features';
import Plan from './conponents/Plan';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Burnner />
      <Features />
      <Plan />
    </>
  )
}
