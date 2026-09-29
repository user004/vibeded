import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme'

const preview = {
  decorators: [(Story) => <ThemeProvider theme={theme}><CssBaseline /><Story /></ThemeProvider>],
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
    },
  },
}

export default preview
