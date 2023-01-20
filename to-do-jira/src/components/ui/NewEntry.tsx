import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save';
const NewEntry = () => {
  const [showForm, setshowForm] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [touched, setTouched] = useState(false)
  const handleShowForm = (value: boolean) => {
    setshowForm(value)
  }

  const onSave = () => {
 
  }

  return (
    <Box
      sx={{
        marginBottom: 2,
        padding: 2,
      }}
    >

      {showForm ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='Nueva entrada'
            error={textValue.length === 0 && touched}
            onChange={(e) => setTextValue(e.target.value)}
            onBlur={() => setTouched(true)}
          >
            {' '}
          </TextField>

          <Box display='flex' justifyContent='end'>
            <Button
              variant='outlined'
              color='error'
              endIcon={<AddIcon></AddIcon>}
              onClick={ () => handleShowForm(false)}
            >
              Cancelar
            </Button>
            <Box sx={{ p: 1 }}></Box>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveIcon></SaveIcon>}
              disabled={textValue.length === 0}
              onClick={ () => onSave()}

            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
        variant='outlined'
        color='info'
        fullWidth
        endIcon={<AddIcon></AddIcon>}
        onClick={ () => handleShowForm(true)}
      >
        Agregar
      </Button>
      )}
    </Box>
  )
}

export default NewEntry
