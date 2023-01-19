import {
  Box,
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Grid,
} from '@mui/material'
import React, { useContext } from 'react'
import DnsIcon from '@mui/icons-material/Dns'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined'
import { UIContext } from '../../context/ui/UIContext';
import CloseIcon from '@mui/icons-material/Close';
const menuItems = ['Home', 'About', 'Contact']
export const Sidebar = () => {
  const {sidemenuOpen } = useContext(UIContext)
  const { closeSidebar } = useContext(UIContext)
  return (
    <Drawer   anchor='left' open={sidemenuOpen} onClose={closeSidebar}>
      <Grid container spacing={2}
        sx={{
          
          width: '300px',
          padding: '2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
          <Typography variant='h4'>Sidebar</Typography> 
       <CloseIcon onClick={closeSidebar}> </CloseIcon>
      </Grid>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton key={item}>
            <ListItemIcon>
              {index % 2 === 0 ? <DnsIcon /> : <DomainVerificationIcon />}
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Divider></Divider>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton key={item}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <AccountTreeOutlinedIcon />
              ) : (
                <AddToDriveOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
