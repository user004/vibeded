import { useContext } from 'react'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import Tooltip from '../Tooltip/Tooltip'
import './Checkbox.css'

function Checkbox({ checkboxKey, icon, label, onChange }) {
  const context = useContext(FieldGuideContext)

  if (!context) {
    throw new Error('Checkbox must be used within a FieldGuideProvider')
  }

  const { checkboxState, setCheckboxChecked } = context
  const checked = Boolean(checkboxState[checkboxKey])

  return (
    <label className="field-guide-checkbox" htmlFor={checkboxKey}>
      <input
        id={checkboxKey}
        name={checkboxKey}
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          setCheckboxChecked(checkboxKey, event.target.checked)
          onChange?.(event.target.checked)
        }}
      />
      <Tooltip label={label}>
        <span aria-hidden="true">{icon}</span>
      </Tooltip>
    </label>
  )
}

export default Checkbox
