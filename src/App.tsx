import { ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { Dashboard } from './pages/dashboard.page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
