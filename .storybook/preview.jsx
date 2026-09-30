import '../src/index.css'
import { TooltipProvider } from '../src/components/ui/tooltip'

document.documentElement.classList.add('dark')

const preview = {
  parameters: {
    layout: 'padded',
    controls: {
      expanded: true,
    },
  },
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
}

export default preview
