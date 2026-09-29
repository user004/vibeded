import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title, { TitleScope } from '../Title/Title'
import { Box, Typography } from '@mui/material'

function Mutation({ item }) {
  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        tags={
          <>
            <Tag tag={item.category} />
            <Tag tag={item.active ? 'Active' : 'Passive'} />
          </>
        }
      />

      {Array.isArray(item.ranks) && item.ranks.length > 0 && (
        <TitleScope>
          <Box>
            <Box component="ul" sx={{ display: 'grid', gap: 1.5, p: 0, m: 0, listStyle: 'none' }}>
              {item.ranks.map((rankInfo, index) => (
                <Box
                  component="li"
                  key={`${item.name}-rank-${index}`}
                  sx={{ display: 'grid', gap: 1, p: 1.5, borderRadius: 2, border: 1, borderColor: 'divider', bgcolor: 'action.hover' }}
                >
                  <Title title={`Rank ${rankInfo.rank}`} />
                  <Checkbox
                    checkboxKey={`mutation-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${rankInfo.rank}`}
                    icon="🔓"
                    label={`Unlock rank ${rankInfo.rank}`}
                  />
                  <Typography color="text.secondary">{rankInfo.effect}</Typography>
                  <Typography color="text.secondary">Obtained: {rankInfo.obtained}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </TitleScope>
      )}
    </Card>
  )
}

export default Mutation
