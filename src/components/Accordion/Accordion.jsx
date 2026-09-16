import './Accordion.css'

function Accordion({ summary, children, defaultOpen = false }) {
  return (
    <details className="accordion" open={defaultOpen}>
      <summary>{summary}</summary>
      <div className="content">{children}</div>
    </details>
  )
}

export default Accordion
