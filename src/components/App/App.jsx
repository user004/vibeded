import { Container } from '@mantine/core'
import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'
import Card from '../Card/Card.jsx'

function App() {
  return (
    <FieldGuideProvider>
      <Container component="main" size="xl" py="md">
        <Card>
          <Hero />
          <Tabs />
        </Card>
      </Container>
    </FieldGuideProvider>
  )
}

export default App
