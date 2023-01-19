import { MainLayout } from '@/components/layout'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <div>
      <MainLayout title='Todo Tasks'>
        <h1>Hola</h1>
      </MainLayout>
    </div>
  )
}

export default HomePage
