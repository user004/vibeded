import { Card as MantineCard, Stack } from '@mantine/core'

function Card({ children, ...props }) {
  return (
    <MantineCard {...props} component="article" withBorder>
      <Stack gap="md">{children}</Stack>
    </MantineCard>
  )
}

export default Card
