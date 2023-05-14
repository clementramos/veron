import Head from 'next/head'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>UN&DEMI - Pédagogie et enthousiasme climatique</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}
