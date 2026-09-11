import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'

function Armor({ item }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>Archetype: {item.archetype}</p>
      <p>Tier: {item.tier}</p>
      <p>Slot: {item.slot}</p>
      <p>Durability: {item.durability}</p>
      <p>Defense: {item.defense}</p>
      <p>Resistance: {item.resistance}</p>
      {item.pieceEffect && <p>Piece Effect: {item.pieceEffect}</p>}
      {item.sleekEffect && <p>Sleek Effect: {item.sleekEffect}</p>}
      {item.set && (
        <p>
          Set: {item.set.name} ({item.set.bonus})
        </p>
      )}

      {Array.isArray(item.recipes) && item.recipes.length > 0 && (
        <RecipeList recipes={item.recipes} itemName={item.name} />
      )}

      <Repair repairs={item.repair} itemName={item.name} />
    </article>
  )
}

export default Armor
