import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1, padding: '10px' }}>
        <CardActionArea>
            <CardContent>
            <Typography sx= {{whiteSpace:'pre-line'}}>
                Esto es la descripción
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