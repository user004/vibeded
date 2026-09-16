import './App.css'
import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'

function App() {
  return (
    <FieldGuideProvider>
      <main className="app-shell">
        <div className="app-shell__frame">
          <Hero />
          <Tabs />
        </div>
      </main>
    </FieldGuideProvider>
  )
}

export default App
