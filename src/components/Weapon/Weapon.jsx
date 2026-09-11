import RecipeList from '../RecipeList/RecipeList'
import Repair from '../Repair/Repair'
import Tier from '../Tier/Tier'
import Checkbox from '../Checkbox/Checkbox'
import './Weapon.css'

function Weapon({ item }) {
  const checkboxKey = `weapon-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <article className="weapon-card">
      <header className="weapon-card__header">
        <h3 className="weapon-card__title">{item.name}</h3>
        <Checkbox checkboxKey={checkboxKey} label="Owned" />
        <div className="weapon-card__meta">
          <span className="weapon-card__chip">{item.category}</span>
          <Tier tier={item.tier} />
        </div>
      </header>

      {Array.isArray(item.status) && item.status.length > 0 && (
        <div className="weapon-card__section">
          <h4 className="weapon-card__heading">Status</h4>
          <ul className="weapon-card__list">
            {item.status.map((status, index) => (
              <li className="weapon-card__list-item" key={`${item.name}-status-${index}`}>
                {status}
              </li>
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
