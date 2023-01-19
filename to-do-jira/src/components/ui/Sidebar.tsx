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
} from '@mui/material'
import React from 'react'
import DnsIcon from '@mui/icons-material/Dns'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined'
const menuItems = ['Home', 'About', 'Contact']
export const Sidebar = () => {
  return (
    <Drawer anchor='left' open={true}>
      <Box
        sx={{
          padding: '1rem 4rem',
        }}
      >
        <Typography variant='h4'>Sidebar</Typography>
      </Box>
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
