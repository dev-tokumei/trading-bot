import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CachedIcon from '@mui/icons-material/Cached'
export const HeaderComponent = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: '#bbb8b8' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: {
              xs: 'center',
              sm: 'center',
              md: 'left',
              color: '#bbb8b8',
            },
          }}
        >
          Dashboard
        </Typography>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: '#bbb8b8' }}
        >
          <CachedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
