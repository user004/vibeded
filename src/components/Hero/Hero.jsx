import Title from '../Title/Title'
import Stack from 'react-bootstrap/Stack'

function Hero() {
  return (
    <Stack as="header" gap={2}>
      <Title title="Grounded 2 Field Guide" />
      <p>
        A backyard-styled codex for armor, creatures, mutations, resources, and
        weapons inspired by the layered resource tables on the Grounded wiki.
      </p>
    </Stack>
  )
}

export default Hero
