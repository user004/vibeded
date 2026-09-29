import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { useContext } from 'react'
import Accordion from '../Accordion/Accordion'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import './Creature.css'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title from '../Title/Title'

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
    <Card className="creature-card" data-gold-card={isGoldCard}>
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={
          <>
            <Checkbox checkboxKey={peepedKey} icon="👀" label="Peeped" onChange={handlePeepedChange} />
            <Checkbox checkboxKey={goldCardKey} icon="🥇" label="Gold" onChange={handleGoldCardChange} />
          </>
        }
        tags={
          <>
            <Tag tag={item.category} />
            {item.summonedWith && <Tag tag={`Summoned with ${item.summonedWith}`} />}
          </>
        }
      />

      <Accordion summary="Details">
        <div className="creature-card__grid">
          {Array.isArray(item.environments) && item.environments.length > 0 && (
            <div className="creature-card__section">
              <Title title="Environments" className="creature-card__heading" />
              <ul className="creature-card__list">
                {item.environments.map((environment, index) => (
                  <li key={`${item.name}-environment-${index}`}>{environment}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.loot) && item.loot.length > 0 && (
            <div className="creature-card__section">
              <Title title="Loot" className="creature-card__heading" />
              <ul className="creature-card__list">
                {item.loot.map((lootItem, index) => (
                  <li key={`${item.name}-loot-${index}`}>{lootItem}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Accordion>
    </Card>
  )
}

export default Creature
