import { SimpleGrid, Stack, Text } from '@mantine/core'
import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import ItemHeader from '../ItemHeader/ItemHeader'
import Card from '../Card/Card'
import Tooltip from '../Tooltip/Tooltip'

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
        <SimpleGrid cols={3}>
          <Stack gap={0}><Text fw={700}>DUR</Text><Text>{item.durability}</Text></Stack>
          <Stack gap={0}><Text fw={700}>DEF</Text><Text>{item.defense}</Text></Stack>
          <Stack gap={0}><Text fw={700}>RES</Text><Text>{item.resistance}</Text></Stack>
        </SimpleGrid>

        {item.pieceEffect && (
          <Text>
            Piece Effect: <Tooltip name={item.pieceEffect} />
          </Text>
        )}
        {item.sleekEffect != null && (
          <Text>
            Sleek Effect: <Tooltip name={item.sleekEffect} />
          </Text>
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
