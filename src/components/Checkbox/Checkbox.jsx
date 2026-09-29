import { useContext } from 'react'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import Tooltip from '../Tooltip/Tooltip'
import Form from 'react-bootstrap/Form'

function Checkbox({ checkboxKey, icon, label, checked: controlledChecked, onChange }) {
  const context = useContext(FieldGuideContext)

  if (!context) {
    throw new Error('Checkbox must be used within a FieldGuideProvider')
  }

  const { checkboxState, setCheckboxChecked } = context
  const checked = controlledChecked ?? Boolean(checkboxState[checkboxKey])

  return (
    <Form.Check
      id={checkboxKey}
      name={checkboxKey}
      type="checkbox"
      className="mb-0"
      checked={checked}
      label={<Tooltip label={label}><span aria-hidden="true">{icon}</span></Tooltip>}
      onChange={(event) => {
        if (controlledChecked === undefined) {
          setCheckboxChecked(checkboxKey, event.target.checked)
        }
        onChange?.(event.target.checked)
      }}
    />
  )
}

export default Checkbox
