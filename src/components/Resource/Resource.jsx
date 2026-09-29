import RecipeList from '../RecipeList/RecipeList'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'
import { Box } from '@mui/material'

function Resource({ item }) {
  const checkboxKey = `resource-analyzed-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🧪" label="Analyzed" />}
        tags={<Tag tag={item.category} />}
      />

      <Accordion summary="Details">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(15rem, 100%), 1fr))', gap: 1.5 }}>
          {Array.isArray(item.creatures) && item.creatures.length > 0 && (
            <Box sx={{ display: 'grid', gap: 1, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
              <Title title="Creatures" />
              <Box component="ul" sx={{ pl: 2, my: 0, color: 'text.secondary' }}>
                {item.creatures.map((creature, index) => (
                  <Box component="li" key={`${item.name}-creature-${index}`}>{creature}</Box>
                ))}
              </Box>
            </Box>
          )}

          {Array.isArray(item.locations) && item.locations.length > 0 && (
            <Box sx={{ display: 'grid', gap: 1, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
              <Title title="Locations" />
              <Box component="ul" sx={{ pl: 2, my: 0, color: 'text.secondary' }}>
                {item.locations.map((location, index) => (
                  <Box component="li" key={`${item.name}-location-${index}`}>{location}</Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}
      </Accordion>
    </Card>
  )
}

export default Resource
