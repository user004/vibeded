import RecipeList from '../RecipeList/RecipeList'
import Tag from '../Tag/Tag'
import Checkbox from '../Checkbox/Checkbox'
import './Resource.css'
import ItemHeader from "../ItemHeader/ItemHeader.jsx";
import Accordion from "../Accordion/Accordion.jsx";

function Resource({ item }) {
  const checkboxKey = `resource-analyzed-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <article className="resource-card">

      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={<Checkbox checkboxKey={checkboxKey} icon="🧪" label="Analyzed" />}
        tags={<Tag tag={item.category} />}
      />

      <Accordion summary="Details">
        <div className="resource-card__collections">
          {Array.isArray(item.creatures) && item.creatures.length > 0 && (
            <div className="resource-card__section">
              <h4 className="resource-card__heading">Creatures</h4>
              <ul className="resource-card__list">
                {item.creatures.map((creature, index) => (
                  <li key={`${item.name}-creature-${index}`}>{creature}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.locations) && item.locations.length > 0 && (
            <div className="resource-card__section">
              <h4 className="resource-card__heading">Locations</h4>
              <ul className="resource-card__list">
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
    </article>
  )
}

export default Resource
