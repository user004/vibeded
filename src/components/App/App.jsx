import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import { TooltipProvider } from '../ui/tooltip'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'

function App() {
  return (
    <TooltipProvider>
      <FieldGuideProvider>
        <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6">
          <Hero />
          <Tabs />
        </main>
      </FieldGuideProvider>
    </TooltipProvider>
  )
}

export default App
