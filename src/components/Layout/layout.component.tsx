import React from 'react'
import { Box, Container, Toolbar } from '@mui/material'
import { HeaderComponent } from '../Header/header.component'
import { BottomNavigationComponent } from '../BottomNavigation/bottomvaigation.component'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#132840',
        width: '100%',
        overflowY: 'scroll',
      }}
    >
      <HeaderComponent />
      <Toolbar />
      <Container sx={{ flexGrow: 1, mt: 2, position: 'relative' }}>
        {children}
      </Container>
      <BottomNavigationComponent />
    </Box>
  )
}
