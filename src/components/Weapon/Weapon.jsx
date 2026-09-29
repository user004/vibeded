import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'
import { Box } from '@mui/material'

function Weapon({ item }) {
  const checkboxKey = `weapon-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={<Tag tag={item.category} />}
      />

      <Accordion summary="Details">
        {Array.isArray(item.status) && item.status.length > 0 && (
          <Box sx={{ display: 'grid', gap: 1 }}>
            <Title title="Status" />
            <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 0, m: 0, listStyle: 'none' }}>
              {item.status.map((status, index) => (
                <Box component="li" key={`${item.name}-status-${index}`} sx={{ px: 1.5, py: 1, border: 1, borderColor: 'divider', borderRadius: 99, bgcolor: 'action.hover' }}>
                  <Tooltip name={status} />
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}

        <Repair repairs={item.repair} itemName={item.name} />
      </Accordion>
    </Card>
  )
}

export default Weapon
