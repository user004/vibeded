import { List as MantineList, Stack } from '@mantine/core'
import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'

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
          <Stack>
            <Title title="Status" />
            <MantineList>
              {item.status.map((status, index) => (
                <MantineList.Item key={`${item.name}-status-${index}`}><Tooltip name={status} /></MantineList.Item>
              ))}
            </MantineList>
          </Stack>
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
