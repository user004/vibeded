import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tier from '../Tier/Tier'
import Checkbox from '../Checkbox/Checkbox'
import './Armor.css'

function Armor({ item }) {
  const checkboxKey = `armor-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <article className="armor-card">
      <header className="armor-card__header">
        <h3 className="armor-card__title">{item.name}</h3>
        <Checkbox checkboxKey={checkboxKey} label="Owned" />
        <div className="armor-card__meta">
          <span className="armor-card__chip">{item.archetype}</span>
          <Tier tier={item.tier} />
          <span className="armor-card__chip">{item.slot}</span>
        </div>
      </header>

      <div className="armor-card__stats">
        <div className="armor-card__stat">
          <span className="armor-card__stat-label">Durability</span>
          <p className="armor-card__stat-value">{item.durability}</p>
        </div>
        <div className="armor-card__stat">
          <span className="armor-card__stat-label">Defense</span>
          <p className="armor-card__stat-value">{item.defense}</p>
        </div>
        <div className="armor-card__stat">
          <span className="armor-card__stat-label">Resistance</span>
          <p className="armor-card__stat-value">{item.resistance}</p>
        </div>
      </div>

      {item.pieceEffect && <p className="armor-card__text">Piece Effect: {item.pieceEffect}</p>}
      {item.sleekEffect && <p className="armor-card__text">Sleek Effect: {item.sleekEffect}</p>}
      {item.set && (
        <p className="armor-card__text">
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
