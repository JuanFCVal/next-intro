import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';

export const Navbar = () => {
  const { openSidebar } = useContext(UIContext)
  return (
    <AppBar position='sticky' elevation={1}>
      <Toolbar>
        <IconButton size='large' onClick={ openSidebar }>
          <MenuOutlined></MenuOutlined>
        </IconButton>
        <Typography variant='h5'>To Do List</Typography>
      </Toolbar>
    </AppBar>
  )
}
