import { List, Paper } from '@mui/material'
import React from 'react'
import EntryCard from './EntryCard';

const EntryList = () => {
  return (
    <div>
        <Paper sx= {{height: 'calc(100vh )', backgroundColor: 'transparent', padding: "2px 10px"}}>
            <List sx= {{opacity: 1}}>
                <EntryCard></EntryCard>
                <EntryCard></EntryCard>
                <EntryCard></EntryCard>
                <EntryCard></EntryCard>
            </List>
        </Paper>
    </div>
  )
}

export default EntryList