import statuses from '../../data/statuses.json'
import { Tooltip as TooltipRoot, TooltipTrigger, TooltipContent } from '../ui/tooltip'

function Tooltip({ name, label, children = name, fitContent = false }) {
  const status = statuses.find((item) => item.name === name)
  if (!status) {
    if (!label) {
      return children
    }

    return (
      <TooltipRoot>
        <TooltipTrigger asChild><button type="button" className="cursor-help underline decoration-dotted">{children}</button></TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </TooltipRoot>
    )
  }

  return (
    <TooltipRoot>
      <TooltipTrigger asChild>
        <button type="button" className="inline-flex cursor-help align-middle">
          <img className="size-6 object-contain [image-rendering:pixelated]" src={status.icon} alt={status.name} />
        </button>
      </TooltipTrigger>
      <TooltipContent className={fitContent ? 'max-w-fit' : 'max-w-xs'}>
        <span className="grid gap-2 whitespace-pre-line">
          <span className="flex items-center gap-2">
            <img className="size-6 object-contain" src={status.icon} alt="" />
            <strong>{status.name}</strong>
          </span>
          <span>{status.description}</span>
          <span>{status.details}</span>
        </span>
      </TooltipContent>
    </TooltipRoot>
  )
}

export default Tooltip
