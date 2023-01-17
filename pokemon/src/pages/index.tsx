import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button } from '@nextui-org/react'
import Layout from '@/components/Layouts/Layout'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <Layout title='Lista de Pokemon'>
      <h1>Hola mundo </h1>
      <Button>Hola mundo</Button>
    </Layout>
  )
}
