import statuses from '../../data/statuses.json'
import './Tooltip.css'

function Tooltip({ name, label, children = name, fitContent = false }) {
  const status = statuses.find((item) => item.name === name)
  const contentClassName = fitContent
    ? 'tooltip__content tooltip__content--fit'
    : 'tooltip__content'

  if (!status) {
    if (!label) {
      return children
    }

    return (
      <span className="tooltip" tabIndex="0">
        {children}
        <span className={contentClassName} role="tooltip">
          <span className="tooltip__description">{label}</span>
        </span>
      </span>
    )
  }

  return (
    <span className="tooltip" tabIndex="0">
      <img className="tooltip__trigger-icon" src={`${import.meta.env.BASE_URL}${status.icon}`} alt={status.name} />
      <span className={contentClassName} role="tooltip">
        <span className="tooltip__header">
          <img className="tooltip__icon" src={`${import.meta.env.BASE_URL}${status.icon}`} alt="" />
          <strong className="tooltip__name">{status.name}</strong>
        </span>
        <span className="tooltip__description">{status.description}</span>
        <span className="tooltip__details">{status.details}</span>
      </span>
    </span>
  )
}

export default Tooltip
