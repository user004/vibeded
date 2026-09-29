import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import ItemHeader from '../ItemHeader/ItemHeader'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'
import { Box, Typography } from '@mui/material'

export const getArmorCheckboxKey = (name) =>
  `armor-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

function Armor({ item }) {
  const checkboxKey = getArmorCheckboxKey(item.name)

  return (
    <Card>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🔨" label="Crafted" />}
        tags={
          <>
            {item.archetype != null && <Tag tag={item.archetype} />}
            <Tag tag={item.slot} />
          </>
        }
      />

      <Accordion summary="Details">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 1.5 }}>
          {[
            ['DUR', item.durability],
            ['DEF', item.defense],
            ['RES', item.resistance],
          ].map(([label, value]) => (
            <Box key={label} sx={{ display: 'grid', gap: 0.5, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
              <Typography variant="caption" color="text.secondary">{label}</Typography>
              <Typography color="text.secondary">{value}</Typography>
            </Box>
          ))}
        </Box>

        {item.pieceEffect && (
          <Typography color="text.secondary">
            Piece Effect: <Tooltip name={item.pieceEffect} />
          </Typography>
        )}
        {item.sleekEffect != null && (
          <Typography color="text.secondary">
            Sleek Effect: <Tooltip name={item.sleekEffect} />
          </Typography>
        )}

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}

        <Repair repairs={item.repair} itemName={item.name} />
      </Accordion>
    </Card>
  )
}

export default Armor
