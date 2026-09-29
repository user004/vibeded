import statuses from '../../data/statuses.json'
import { Box, Group, Image, Stack, Text, Tooltip as MantineTooltip } from '@mantine/core'

function Tooltip({ name, label, children = name, fitContent = false }) {
  const status = statuses.find((item) => item.name === name)

  if (!status) {
    if (!label) {
      return children
    }

    return (
      <MantineTooltip label={label} w={fitContent ? 'max-content' : undefined} withArrow>
        <Text component="span">{children}</Text>
      </MantineTooltip>
    )
  }

  return (
    <MantineTooltip
      label={
        <Stack gap="xs">
          <Group gap="xs">
            <Image src={status.icon} alt="" w={24} h={24} />
            <Text fw={700}>{status.name}</Text>
          </Group>
          <Text size="sm">{status.description}</Text>
          <Text size="sm">{status.details}</Text>
        </Stack>
      }
      multiline
      maw={320}
      withArrow
    >
      <Box component="span" display="inline-flex">
        <Image src={status.icon} alt={status.name} w={24} h={24} />
      </Box>
    </MantineTooltip>
  )
}

export default Tooltip
