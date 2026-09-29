import statuses from '../../data/statuses.json'
import { Box, Tooltip as MuiTooltip, Typography } from '@mui/material'

function Tooltip({ name, label, children = name }) {
  const status = statuses.find((item) => item.name === name)
  if (!status && !label) return children

  const content = status ? (
    <Box sx={{ display: 'grid', gap: 1, maxWidth: 320 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box component="img" src={status.icon} alt="" sx={{ width: 32, height: 32, objectFit: 'contain' }} />
        <Typography variant="subtitle2">{status.name}</Typography>
      </Box>
      <Typography variant="body2">{status.description}</Typography>
      <Typography variant="caption" sx={{ whiteSpace: 'pre-line' }}>{status.details}</Typography>
    </Box>
  ) : label

  return (
    <MuiTooltip title={content} arrow>
      <Box component="span" tabIndex={0} sx={{ display: 'inline-flex', verticalAlign: 'middle', cursor: 'help' }}>
        {status ? <Box component="img" src={status.icon} alt={status.name} sx={{ width: 32, height: 32, objectFit: 'contain' }} /> : children}
      </Box>
    </MuiTooltip>
  )
}

export default Tooltip
