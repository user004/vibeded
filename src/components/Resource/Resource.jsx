import RecipeList from '../RecipeList/RecipeList'

function Resource({ item }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Tier: {item.tier}</p>

      {Array.isArray(item.creatures) && item.creatures.length > 0 && (
        <div>
          <h4>Creatures</h4>
          <ul>
            {item.creatures.map((creature, index) => (
              <li key={`${item.name}-creature-${index}`}>{creature}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(item.locations) && item.locations.length > 0 && (
        <div>
          <h4>Locations</h4>
          <ul>
            {item.locations.map((location, index) => (
              <li key={`${item.name}-location-${index}`}>{location}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(item.recipes) && item.recipes.length > 0 && (
        <RecipeList recipes={item.recipes} itemName={item.name} />
      )}
    </article>
  )
}

export default Resource
