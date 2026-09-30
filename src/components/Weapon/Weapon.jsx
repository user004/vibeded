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
          <div className="grid gap-2">
            <Title title="Status" />
            <ul className="flex flex-wrap gap-2">
              {item.status.map((status, index) => (
                <li className="rounded-lg border p-2" key={`${item.name}-status-${index}`}>
                  <Tooltip name={status} />
                </li>
              ))}
            </ul>
          </div>
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
