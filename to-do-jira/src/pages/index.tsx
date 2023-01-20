import React from 'react'
import { NextPage } from 'next'
import { MainLayout } from '@/components/layout'
import { Grid, Typography, Card, CardHeader, CardContent } from '@mui/material'
import EntryList from '../components/ui/EntryList'
import NewEntry from '@/components/ui/NewEntry'

const HomePage: NextPage = () => {
  return (
    <div>
      <MainLayout title='Todo Tasks'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader
                title='Pendientes'
                sx={{ textAlign: 'center' }}
              ></CardHeader>
              <CardContent>
              <NewEntry></NewEntry>
                <EntryList status='Finished'></EntryList>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader
                title='En Progreso'
                sx={{ textAlign: 'center' }}
              ></CardHeader>
              <CardContent>
     
                <EntryList status='In progress'></EntryList>
              </CardContent>
            </Card>
          </Grid>{' '}
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader
                title='Completadas'
                sx={{ textAlign: 'center' }}
              ></CardHeader>
              <CardContent>
                <EntryList status='pending'></EntryList>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MainLayout>
    </div>
  )
}

export default HomePage
