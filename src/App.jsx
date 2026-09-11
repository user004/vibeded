import './App.css'
import { FieldGuideProvider } from './context/FieldGuideContext'
import Tabs from './components/Tabs/Tabs'

function App() {
  return (
    <FieldGuideProvider>
      <main className="app-shell">
        <div className="app-shell__frame">
          <Tabs />
        </div>
      </main>
    </FieldGuideProvider>
  )
}

export default App
