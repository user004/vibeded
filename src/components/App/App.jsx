import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'
import Card from '../Card/Card.jsx'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <FieldGuideProvider>
      <Container as="main" className="py-4">
        <Card>
          <Hero />
          <Tabs />
        </Card>
      </Container>
    </FieldGuideProvider>
  )
}

export default App
