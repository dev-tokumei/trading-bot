import { useState } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import SettingsIcon from '@mui/icons-material/Settings'

export const BottomNavigationComponent = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        color: '#4f5e74',
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            color: '#4f5e74', // Цвет неактивных кнопок
          },
          '& .Mui-selected': {
            color: 'white !important', // Цвет активной кнопки (иконка + текст)
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '10px',
            mt: '2px',
          },
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          icon={<ListIcon fontSize="medium" />}
        />
        <BottomNavigationAction
          label="Megabot"
          icon={<ShowChartIcon fontSize="small" />}
        />
        <BottomNavigationAction
          label="Bot market"
          icon={<ShoppingCartIcon fontSize="small" />}
        />
        <BottomNavigationAction
          label="Coin prices"
          icon={<PaidOutlinedIcon fontSize="small" />}
        />
        <BottomNavigationAction
          label="Profile"
          icon={
            <Badge badgeContent={3} color="warning">
              <SettingsIcon fontSize="small" />
            </Badge>
          }
        />
      </BottomNavigation>
    </Paper>
  )
}
