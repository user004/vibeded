import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { TitleScope } from '../Title/Title'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <MuiAccordion defaultExpanded={defaultOpen} disableGutters>
      <AccordionSummary>
        <Typography color="primary">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: 'grid', gap: 2 }}>
        <TitleScope>{children}</TitleScope>
      </AccordionDetails>
    </MuiAccordion>
  )
}

export default Accordion
