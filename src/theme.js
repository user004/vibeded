import { createTheme } from '@mantine/core'

const fieldGuideTheme = createTheme({
  primaryColor: 'fieldGuideGreen',
  primaryShade: 6,
  colors: {
    fieldGuideGreen: [
      '#e8f5e9',
      '#d3e9d4',
      '#acd5af',
      '#83c089',
      '#61ae6b',
      '#4ca258',
      '#3f9b4d',
      '#328540',
      '#287637',
      '#17652a',
    ],
  },
  autoContrast: true,
})

export default fieldGuideTheme
