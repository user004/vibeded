import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'

function Weapon({ item }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Tier: {item.tier}</p>

      {Array.isArray(item.status) && item.status.length > 0 && (
        <div>
          <h4>Status</h4>
          <ul>
            {item.status.map((status, index) => (
              <li key={`${item.name}-status-${index}`}>{status}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(item.recipes) && item.recipes.length > 0 && (
        <RecipeList recipes={item.recipes} itemName={item.name} />
      )}

      <Repair repairs={item.repair} itemName={item.name} />
    </article>
  )
}

export default Weapon
