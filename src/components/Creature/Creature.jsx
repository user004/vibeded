import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { useContext } from 'react'
import Tier from '../Tier/Tier'
import './Creature.css'

function Creature({ item }) {
  const { checkboxState, setCheckboxChecked } = useContext(FieldGuideContext)
  const peepedKey = `creature-peeped-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const goldCardKey = `creature-gold-card-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const isGoldCard = Boolean(checkboxState[goldCardKey])

  const handleGoldCardChange = (checked) => {
    setCheckboxChecked(goldCardKey, checked)
    if (checked) {
      setCheckboxChecked(peepedKey, true)
    }
  }

  const handlePeepedChange = (checked) => {
    setCheckboxChecked(peepedKey, checked)
    if (!checked) {
      setCheckboxChecked(goldCardKey, false)
    }
  }

  return (
    <article className="creature-card" data-gold-card={isGoldCard}>
      <h3 className="creature-card__title">{item.name}</h3>
      <div className="creature-card__summary">
        <span className="creature-card__badge">{item.category}</span>
        <Tier tier={item.tier} />
        {item.summonedWith && (
          <span className="creature-card__badge">Summoned with {item.summonedWith}</span>
        )}
      </div>

      <div className="creature-card__checks">
        <Checkbox checkboxKey={peepedKey} label="Peeped" onChange={handlePeepedChange} />
        <Checkbox checkboxKey={goldCardKey} label="Gold Card" onChange={handleGoldCardChange} />
      </div>

      <div className="creature-card__grid">
        {Array.isArray(item.environments) && item.environments.length > 0 && (
          <div className="creature-card__section">
            <h4 className="creature-card__heading">Environments</h4>
            <ul className="creature-card__list">
              {item.environments.map((environment, index) => (
                <li key={`${item.name}-environment-${index}`}>{environment}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(item.loot) && item.loot.length > 0 && (
          <div className="creature-card__section">
            <h4 className="creature-card__heading">Loot</h4>
            <ul className="creature-card__list">
              {item.loot.map((lootItem, index) => (
                <li key={`${item.name}-loot-${index}`}>{lootItem}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

export default Creature
