import { Accordion as MantineAccordion, Stack } from '@mantine/core'
import { TitleScope } from '../Title/Title'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <MantineAccordion defaultValue={defaultOpen ? 'details' : null}>
      <MantineAccordion.Item value="details">
        <MantineAccordion.Control>{summary}</MantineAccordion.Control>
        <MantineAccordion.Panel>
          <TitleScope>
            <Stack gap="md">{children}</Stack>
          </TitleScope>
        </MantineAccordion.Panel>
      </MantineAccordion.Item>
    </MantineAccordion>
  )
}

export default Accordion
