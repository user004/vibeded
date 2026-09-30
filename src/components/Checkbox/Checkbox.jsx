import { useContext } from 'react'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { Checkbox as CheckboxControl } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

function Checkbox({ checkboxKey, icon, label, checked: controlledChecked, onChange }) {
  const context = useContext(FieldGuideContext)

  if (!context) {
    throw new Error('Checkbox must be used within a FieldGuideProvider')
  }

  const { checkboxState, setCheckboxChecked } = context
  const checked = controlledChecked ?? Boolean(checkboxState[checkboxKey])

  return (
    <div className="flex items-center gap-2">
      <CheckboxControl
        id={checkboxKey}
        name={checkboxKey}
        checked={checked}
        aria-label={label}
        onCheckedChange={(nextChecked) => {
          const value = nextChecked === true
          if (controlledChecked === undefined) {
            setCheckboxChecked(checkboxKey, value)
          }
          onChange?.(value)
        }}
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Label htmlFor={checkboxKey} className="cursor-pointer text-base">
            <span aria-hidden="true">{icon}</span>
            <span className="sr-only">{label}</span>
          </Label>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default Checkbox
