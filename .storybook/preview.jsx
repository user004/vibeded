import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/theme.css'

const preview = {
  decorators: [
    (Story) => (
      <div data-bs-theme="dark">
        <Story />
      </div>
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
