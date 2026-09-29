import './Accordion.css'
import { TitleScope } from '../Title/Title'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <details className="accordion" open={defaultOpen}>
      <summary>{summary}</summary>
      <TitleScope>
        <div className="content">{children}</div>
      </TitleScope>
    </details>
  )
}

export default Accordion
