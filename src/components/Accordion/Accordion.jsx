import BootstrapAccordion from 'react-bootstrap/Accordion'
import { TitleScope } from '../Title/Title'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <BootstrapAccordion defaultActiveKey={defaultOpen ? 'details' : undefined}>
      <BootstrapAccordion.Item eventKey="details">
        <BootstrapAccordion.Header>{summary}</BootstrapAccordion.Header>
        <BootstrapAccordion.Body>
          <TitleScope>{children}</TitleScope>
        </BootstrapAccordion.Body>
      </BootstrapAccordion.Item>
    </BootstrapAccordion>
  )
}

export default Accordion
