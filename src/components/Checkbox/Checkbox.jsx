import { useContext } from 'react'
import { Checkbox as MantineCheckbox } from '@mantine/core'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import Tooltip from '../Tooltip/Tooltip'

function Checkbox({ checkboxKey, icon, label, checked: controlledChecked, onChange }) {
  const context = useContext(FieldGuideContext)

  if (!context) {
    throw new Error('Checkbox must be used within a FieldGuideProvider')
  }

  const { checkboxState, setCheckboxChecked } = context
  const checked = controlledChecked ?? Boolean(checkboxState[checkboxKey])

  return (
    <Tooltip label={label}>
      <MantineCheckbox
        id={checkboxKey}
        name={checkboxKey}
        aria-label={label}
        label={icon}
        checked={checked}
        onChange={(event) => {
          if (controlledChecked === undefined) {
            setCheckboxChecked(checkboxKey, event.target.checked)
          }
          onChange?.(event.target.checked)
        }}
      />
    </Tooltip>
  )
}

export default Checkbox
