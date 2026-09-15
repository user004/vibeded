import './Accordion.css'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <details className="accordion" open={defaultOpen}>
      <summary className="accordion__summary">{summary}</summary>
      <div className="accordion__content">{children}</div>
    </details>
  )
}

export default Accordion
