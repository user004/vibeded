import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { useContext } from 'react'
import Accordion from '../Accordion/Accordion'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
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
    <Card className={isGoldCard ? 'ring-2 ring-amber-400' : ''} data-gold-card={isGoldCard}>
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
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.isArray(item.environments) && item.environments.length > 0 && (
            <div className="grid content-start gap-2 rounded-lg bg-muted p-3">
              <Title title="Environments" />
              <ul className="list-disc pl-5">
                {item.environments.map((environment, index) => (
                  <li key={`${item.name}-environment-${index}`}>{environment}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.loot) && item.loot.length > 0 && (
            <div className="grid content-start gap-2 rounded-lg bg-muted p-3">
              <Title title="Loot" />
              <ul className="list-disc pl-5">
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
