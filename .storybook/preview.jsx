import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import fieldGuideTheme from '../src/theme.js'

const preview = {
  decorators: [
    (Story) => (
      <MantineProvider theme={fieldGuideTheme} defaultColorScheme="dark">
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
    },
  },
}

export default preview
