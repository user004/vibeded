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
        <p>{item.description}</p>

        {item.unlockedBy && <p>Unlocked by: {item.unlockedBy}</p>}

        {item.perks.length > 0 && (
          <div className="grid gap-2">
            <Title title="Perks" />
            <ul className="flex flex-wrap gap-2">
              {item.perks.map((perk) => (
                <li className="rounded-lg border p-2" key={`${item.name}-${perk}`}>
                  <Tooltip name={perk} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.recipes.length > 0 && <RecipeList recipes={item.recipes} itemName={item.name} />}

        {item.sources.length > 0 && (
          <div className="grid gap-2">
            <Title title={isCrafted ? 'Natural Source' : 'Sources'} />
            <ul className="flex flex-wrap gap-2">
              {item.sources.map((source) => <li className="rounded-lg border p-2" key={`${item.name}-${source}`}>{source}</li>)}
            </ul>
          </div>
        )}
      </Accordion>
    </Card>
  )
}

export default Trinket
