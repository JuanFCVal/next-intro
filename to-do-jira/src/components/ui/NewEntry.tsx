import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '../../context/ui/UIContext';
const NewEntry = () => {
  const [textValue, setTextValue] = useState("")
  const [touched, setTouched] = useState(false)
  const { addNewEntry } = useContext(EntriesContext)
  const {openAdding, closeAdding, isAdding} = useContext(UIContext)


  const onSave = () => {
    addNewEntry(textValue)
    setTextValue("")
    setTouched(false)
  }

  return (
    <Box
      sx={{
        marginBottom: 2,
        padding: 2,
      }}
    >

      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='Nueva entrada'
            error={textValue.length === 0 && touched}
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            onBlur={() => setTouched(true)}
          >
            {' '}
          </TextField>

          <Box display='flex' justifyContent='end'>
            <Button
              variant='outlined'
              color='error'
              endIcon={<AddIcon></AddIcon>}
              onClick={ closeAdding} 
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
        onClick={ openAdding }
      >
        Agregar
      </Button>
      )}
    </Box>
  )
}

export default NewEntry
