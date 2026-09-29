import RecipeList from '../RecipeList/RecipeList'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import Checkbox from '../Checkbox/Checkbox'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'
import { Box, Typography } from '@mui/material'

function Trinket({ item }) {
  const checkboxKey = `trinket-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const isCrafted = item.recipes.length > 0

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={item.categories.map((category) => <Tag key={category} tag={category} />)}
      />

      <Accordion summary="Details">
        <Typography color="text.secondary">{item.description}</Typography>

        {item.unlockedBy && <Typography color="text.secondary">Unlocked by: {item.unlockedBy}</Typography>}

        {item.perks.length > 0 && (
          <Box sx={{ display: 'grid', gap: 1 }}>
            <Title title="Perks" />
            <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 0, m: 0, listStyle: 'none' }}>
              {item.perks.map((perk) => (
                <Box component="li" key={`${item.name}-${perk}`} sx={{ px: 1.5, py: 1, border: 1, borderColor: 'divider', borderRadius: 99, bgcolor: 'action.hover' }}>
                  <Tooltip name={perk} />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {item.recipes.length > 0 && <RecipeList recipes={item.recipes} itemName={item.name} />}

        {item.sources.length > 0 && (
          <Box sx={{ display: 'grid', gap: 1 }}>
            <Title title={isCrafted ? 'Natural Source' : 'Sources'} />
            <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pl: 2, my: 0 }}>
              {item.sources.map((source) => <Box component="li" key={`${item.name}-${source}`}>{source}</Box>)}
            </Box>
          </Box>
        )}
      </Accordion>
    </Card>
  )
}

export default Trinket
