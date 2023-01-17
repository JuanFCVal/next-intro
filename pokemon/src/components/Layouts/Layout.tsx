import { FC } from 'react'
import Head from 'next/head'
import { Button } from '@nextui-org/react'
import Navbar from '../ui/Navbar'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}
const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon'}</title>
        <meta name='author' content='Juan F Cevallo' />
        <meta name='description' content='Información sobre el pokemon xxx' />
      </Head>
      <Navbar></Navbar>
      <main
        style={{
          padding: '0 2rem',
        }}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
