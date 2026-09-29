import { Box, Stack } from '@mui/material'
import Tier from '../Tier/Tier'
import Title from '../Title/Title'

function ItemHeader({ title, tier, icon, checkboxes, tags }) {
  return (
    <Box component="header" sx={{ display: 'grid', gap: 1 }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
        {icon || (tier && <Tier tier={tier} />)}
        <Box sx={{ flex: 1, minWidth: 0 }}><Title title={title} /></Box>
        {checkboxes && <Stack direction="column" sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>{checkboxes}</Stack>}
      </Stack>
      {tags && <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>{tags}</Stack>}
    </Box>
  )
}

export default ItemHeader
