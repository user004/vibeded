import { useContext, useMemo, useState } from 'react'
import creatures from '../../data/creatures.json'
import Filters from '../Filters/Filters'
import Creature from '../Creature/Creature'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { filterBySelectedFilters, getCheckboxValue, normalizeValue } from '../listFilterUtils'
import './CreatureList.css'

function CreatureList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})

  const values = useMemo(
    () => ({
      Category: [...new Set(creatures.map((item) => item.category).filter(Boolean))],
      Tier: [...new Set(creatures.map((item) => normalizeValue(item.tier)))],
      Peeped: ['Yes', 'No'],
      'Gold Card': ['Yes', 'No'],
    }),
    [],
  )

  const filteredCreatures = creatures.filter((item) =>
    filterBySelectedFilters(item, selectedFilters, {
      Category: (currentItem, selected) => currentItem.category === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
      Peeped: (currentItem, selected) =>
        getCheckboxValue(checkboxState, `creature-peeped-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
      'Gold Card': (currentItem, selected) =>
        getCheckboxValue(checkboxState, `creature-gold-card-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
    }),
  )

  return (
    <>
      <Filters
        categories={['Category', 'Tier', 'Peeped', 'Gold Card']}
        values={values}
        selectedFilters={selectedFilters}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => setSelectedFilters({})}
      />
      <ul className="creature-list">
        {filteredCreatures.map((item) => (
          <li className="creature-list__item" key={item.name}>
            <Creature item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default CreatureList
