import { List, Paper } from '@mui/material'
import React,  { FC, useContext, useMemo, DragEvent } from 'react'
import EntryCard from './EntryCard';
import { Entry, Status } from '../../interfaces/entry';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '@/context/ui';
interface Props{
    status: Status
}
const EntryList: FC<Props> = ( {status} ) => {
    const { isDragging } = useContext(UIContext)
    const { entries } = useContext(EntriesContext)
    const filteredEntries: Entry[] = useMemo(() =>     entries.filter(
        (entry) => entry.status === status
    ), [entries, status])

    const onDropEntry = (event: DragEvent) => {
        const id = event.dataTransfer.getData("text")
        console.log({id})
    }

    const allowDrop = (event: DragEvent) => {
        event.preventDefault()

    }
  return (
    <div   onDragOver={allowDrop}  onDrop={onDropEntry}>
        <Paper sx= {{height: 'calc(100vh )', backgroundColor: isDragging ? ' transparent': 'info', padding: "2px 10px", transition: 'all .5s'}}>
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