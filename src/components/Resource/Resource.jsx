import { List as MantineList, SimpleGrid, Stack } from '@mantine/core'
import RecipeList from '../RecipeList/RecipeList'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Accordion from '../Accordion/Accordion'
import Title from '../Title/Title'

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
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {Array.isArray(item.creatures) && item.creatures.length > 0 && (
            <Stack>
              <Title title="Creatures" />
              <MantineList>
                {item.creatures.map((creature, index) => (
                  <MantineList.Item key={`${item.name}-creature-${index}`}>{creature}</MantineList.Item>
                ))}
              </MantineList>
            </Stack>
          )}

          {Array.isArray(item.locations) && item.locations.length > 0 && (
            <Stack>
              <Title title="Locations" />
              <MantineList>
                {item.locations.map((location, index) => (
                  <MantineList.Item key={`${item.name}-location-${index}`}>{location}</MantineList.Item>
                ))}
              </MantineList>
            </Stack>
          )}
        </SimpleGrid>

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}
      </Accordion>
    </Card>
  )
}

export default Resource
