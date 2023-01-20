import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { DragEvent, FC, useContext } from 'react'
import { UIContext } from '../../context/ui/UIContext';
interface Props{
    entry : Entry
}


const EntryCard: FC<Props> = ({entry}) => {
    const { setDragging, isDragging } = useContext(UIContext)
    const onDragStart = (event: DragEvent ) => { 
        event.dataTransfer.setData('text', entry.id)
        console.log("SEteo drag a true")
        setDragging(true)
    }
    const onDragEnd = ( ) => {
        setDragging(false)
        console.log("SEteo drag a false")

    }
  return (
    <Card sx={{ opacity: isDragging ? '0.5 ': '1', marginBottom: 1, padding: '10px' }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}> 
        <CardActionArea>
            <CardContent>
            <Typography sx= {{whiteSpace:'pre-line'}}>
                {entry.description}
            </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent:'end'}}>
                <Typography variant='body2'>Hace 30 mins</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

export default EntryCard