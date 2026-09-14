import RecipeList from '../RecipeList/RecipeList'
import Tag from '../Tag/Tag'
import Tier from '../Tier/Tier'
import './Resource.css'

function Resource({ item }) {
  return (
    <article className="resource-card">
      <div className="resource-card__title-row">
        <Tier tier={item.tier} />
        <h3 className="resource-card__title">{item.name}</h3>
      </div>
      <div className="resource-card__summary">
        <Tag tag={item.category} />
      </div>

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
    </article>
  )
}

export default Resource
