import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react'
interface Props{
    entry : Entry
}
const EntryCard: FC<Props> = ({entry}) => {
  return (
    <Card sx={{ marginBottom: 1, padding: '10px' }}>
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