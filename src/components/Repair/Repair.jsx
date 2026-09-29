import Title from '../Title/Title'
import { Box } from '@mui/material'

function Repair({ repairs = [], itemName = 'item' }) {
  if (!Array.isArray(repairs) || repairs.length === 0) {
    return null
  }

  return (
    <Box sx={{ display: 'grid', gap: 1 }}>
      <Title title="Repair" />
      <Box component="ul" sx={{ display: 'grid', gap: 1, p: 0, m: 0, listStyle: 'none' }}>
        {repairs.map((entry, index) => {
          const name = entry?.name ?? entry?.ingredient ?? entry?.item ?? String(entry)
          const quantity = entry?.quantity

          return (
            <Box
              component="li"
              key={`${itemName}-repair-${name}-${index}`}
              sx={{ p: '0.5rem 1rem', borderRadius: 2, bgcolor: 'action.hover', color: 'text.secondary' }}
            >
              {quantity !== undefined ? `${name}: ${quantity}` : name}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Repair
