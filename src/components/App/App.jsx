import './App.css'
import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Tabs from '../Tabs/Tabs.jsx'

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
