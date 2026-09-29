import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'
import { Box, Typography } from '@mui/material'

function Status({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        icon={<Box component="img" src={item.icon} alt="" sx={{ width: 24, height: 24, objectFit: 'contain', imageRendering: 'pixelated' }} />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <Box sx={{ display: 'grid', gap: 1 }}>
          <Typography fontWeight={600} color="text.secondary">{item.description}</Typography>
          <Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>{item.details}</Typography>
        </Box>

        {item.sources.length > 0 && (
          <Box sx={{ display: 'grid', gap: 1, color: 'text.secondary' }}>
            <Box sx={{ textTransform: 'uppercase' }}><Title title="Sources" /></Box>
            <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 2, rowGap: 1, pl: 2, my: 0 }}>
              {item.sources.map((source) => <Box component="li" key={source}>{source}</Box>)}
            </Box>
          </Box>
        )}
      </Accordion>
    </Card>
  )
}

export default Status
