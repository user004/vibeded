import { TitleScope } from '../Title/Title'
import { Accordion as AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <AccordionRoot type="single" collapsible defaultValue={defaultOpen ? 'details' : undefined}>
      <AccordionItem value="details">
        <AccordionTrigger>{summary}</AccordionTrigger>
        <AccordionContent>
          <TitleScope>
            <div className="grid gap-4">{children}</div>
          </TitleScope>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

export default Accordion
