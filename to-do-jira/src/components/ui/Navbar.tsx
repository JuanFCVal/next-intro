import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={1}>
      <Toolbar>
        <IconButton size='large'>
          <MenuOutlined></MenuOutlined>
        </IconButton>
        <Typography variant='h5'>To Do List</Typography>
      </Toolbar>
    </AppBar>
  )
}
