import './App.css'
import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'
import Card from "../Card/Card.jsx";

function App() {
  return (
    <FieldGuideProvider>
      <main className="app-shell">
        <Card>
          <Hero />
          <Tabs />
        </Card>
      </main>
    </FieldGuideProvider>
  )
}

export default App
