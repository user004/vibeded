import { Stack, Text } from '@mantine/core'
import Title from '../Title/Title'

function Hero() {
  return (
    <Stack component="header" gap="xs">
      <Title title="Grounded 2 Field Guide" />
      <Text>
        A backyard-styled codex for armor, creatures, mutations, resources, and
        weapons inspired by the layered resource tables on the Grounded wiki.
      </Text>
    </Stack>
  )
}

export default Hero
