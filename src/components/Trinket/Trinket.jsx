import { List as MantineList, Stack, Text } from '@mantine/core'
import RecipeList from '../RecipeList/RecipeList'
import Accordion from '../Accordion/Accordion'
import Card from '../Card/Card'
import Checkbox from '../Checkbox/Checkbox'
import ItemHeader from '../ItemHeader/ItemHeader'
import Tag from '../Tag/Tag'
import Tooltip from '../Tooltip/Tooltip'
import Title from '../Title/Title'

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
        <Text>{item.description}</Text>

        {item.unlockedBy && <Text>Unlocked by: {item.unlockedBy}</Text>}

        {item.perks.length > 0 && (
          <Stack>
            <Title title="Perks" />
            <MantineList>
              {item.perks.map((perk) => (
                <MantineList.Item key={`${item.name}-${perk}`}><Tooltip name={perk} /></MantineList.Item>
              ))}
            </MantineList>
          </Stack>
        )}

        {item.recipes.length > 0 && <RecipeList recipes={item.recipes} itemName={item.name} />}

        {item.sources.length > 0 && (
          <Stack>
            <Title title={isCrafted ? 'Natural Source' : 'Sources'} />
            <MantineList>
              {item.sources.map((source) => <MantineList.Item key={`${item.name}-${source}`}>{source}</MantineList.Item>)}
            </MantineList>
          </Stack>
        )}
      </Accordion>
    </Card>
  )
}

export default Trinket
