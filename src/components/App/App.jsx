import { Container } from '@mui/material'
import { FieldGuideProvider } from '../../context/FieldGuideContext.jsx'
import Hero from '../Hero/Hero'
import Tabs from '../Tabs/Tabs.jsx'
import Card from '../Card/Card.jsx'

function App() {
  return (
    <FieldGuideProvider>
      <Container component="main" maxWidth={false} sx={{ maxWidth: 1440, mx: 'auto', p: { xs: 2, md: 3 } }}>
        <Card>
          <Hero />
          <Tabs />
        </Card>
      </Container>
    </FieldGuideProvider>
  )
}

export default App
