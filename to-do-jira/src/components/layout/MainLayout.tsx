import { Box } from '@mui/material'
import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Navbar, Sidebar } from '../ui'

interface Props {
  title?: string
  children: ReactNode
}
export const MainLayout: FC<Props> = ({
  title = 'To Do',
  children,
}): JSX.Element => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Box sx={{ padding: '1rem 2 rem' }}>{children}</Box>
    </Box>
  )
}
