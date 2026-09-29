import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import App from './components/App/App.jsx'
import fieldGuideTheme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={fieldGuideTheme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)
