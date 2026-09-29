import { useId } from 'react'
import statuses from '../../data/statuses.json'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import BootstrapTooltip from 'react-bootstrap/Tooltip'

function Tooltip({ name, label, children }) {
  const tooltipId = `tooltip-${useId().replace(/:/g, '')}`
  const status = statuses.find((item) => item.name === name)
  const tooltipContent = status
    ? <><strong>{status.name}</strong><br />{status.description}<br />{status.details}</>
    : label

  if (!tooltipContent) return children ?? name

  return (
    <OverlayTrigger
      placement="top"
      overlay={<BootstrapTooltip id={tooltipId}>{tooltipContent}</BootstrapTooltip>}
    >
      <span tabIndex={0}>
        {status && <img src={status.icon} alt="" width="24" height="24" className="me-1" />}
        {children ?? (status ? null : name)}
      </span>
    </OverlayTrigger>
  )
}

export default Tooltip
