import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo } from 'react'
import EntryCard from './EntryCard';
import { Entry, Status } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
interface Props{
    status: Status
}
const EntryList: FC<Props> = ( {status} ) => {
    const { entries } = useContext(EntriesContext)
    const filteredEntries: Entry[] = useMemo(() =>     entries.filter(
        (entry) => entry.status === status
    ), [entries, status])

  return (
    <div>
        <Paper sx= {{height: 'calc(100vh )', backgroundColor: 'transparent', padding: "2px 10px"}}>
            <List sx= {{opacity: 1}}>
                {
                    filteredEntries.map(
                        (entry) => <EntryCard entry={entry} key={entry.id} ></EntryCard>
                    )
                }
            </List>
        </Paper>
    </div>
  )
}

export default EntryList