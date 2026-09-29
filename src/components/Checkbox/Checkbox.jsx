import { useContext } from 'react'
import { Box, Checkbox as MuiCheckbox, FormControlLabel, Tooltip } from '@mui/material'
import { FieldGuideContext } from '../../context/FieldGuideContext'

function Checkbox({ checkboxKey, icon, label, checked: controlledChecked, onChange }) {
  const context = useContext(FieldGuideContext)

  if (!context) {
    throw new Error('Checkbox must be used within a FieldGuideProvider')
  }

  const { checkboxState, setCheckboxChecked } = context
  const checked = controlledChecked ?? Boolean(checkboxState[checkboxKey])

  return (
    <Tooltip title={label}>
      <FormControlLabel
        label={icon ? <Box component="span" aria-hidden="true" sx={{ fontSize: '1.25rem', lineHeight: 1 }}>{icon}</Box> : label}
        sx={{ m: 0 }}
        control={<MuiCheckbox
          id={checkboxKey}
          name={checkboxKey}
          slotProps={{ input: { 'aria-label': label } }}
          checked={checked}
          onChange={(event) => {
            if (controlledChecked === undefined) {
              setCheckboxChecked(checkboxKey, event.target.checked)
            }
            onChange?.(event.target.checked)
          }}
        />}
      />
    </Tooltip>
  )
}

export default Checkbox
