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
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.isArray(item.creatures) && item.creatures.length > 0 && (
            <div className="grid content-start gap-2 rounded-lg bg-muted p-3">
              <Title title="Creatures" />
              <ul className="list-disc pl-5">
                {item.creatures.map((creature, index) => (
                  <li key={`${item.name}-creature-${index}`}>{creature}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.locations) && item.locations.length > 0 && (
            <div className="grid content-start gap-2 rounded-lg bg-muted p-3">
              <Title title="Locations" />
              <ul className="list-disc pl-5">
                {item.locations.map((location, index) => (
                  <li key={`${item.name}-location-${index}`}>{location}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {Array.isArray(item.recipes) && item.recipes.length > 0 && (
          <RecipeList recipes={item.recipes} itemName={item.name} />
        )}
      </Accordion>
    </Card>
  )
}

export default Resource
