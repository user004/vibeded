import { useContext, useMemo, useState } from 'react'
import creatures from '../../data/creatures.json'
import Filters from '../Filters/Filters'
import Creature from '../Creature/Creature'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
import './CreatureList.css'

function CreatureList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Category: getUniqueFilterValues(creatures.map((item) => item.category).filter(Boolean)),
      Tier: getUniqueFilterValues(creatures.map((item) => normalizeValue(item.tier))),
      Peeped: ['Yes', 'No'],
      'Gold Card': ['Yes', 'No'],
    }),
    [],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredCreatures = creatures.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Category: (currentItem, selected) => currentItem.category === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
      Peeped: (currentItem, selected) =>
        getCheckboxValue(checkboxState, `creature-peeped-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
      'Gold Card': (currentItem, selected) =>
        getCheckboxValue(checkboxState, `creature-gold-card-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
    })
  })

  return (
    <>
      <Filters
        categories={['Category', 'Tier', 'Peeped', 'Gold Card']}
        values={values}
        selectedFilters={selectedFilters}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => {
          setSelectedFilters({})
          setSearchValue('')
        }}
      />
      <ul className="creature-list">
        {filteredCreatures.map((item, index) => (
          <li className="creature-list__item" key={`${item.name}-${item.category}-${item.tier}-${index}`}>
            <Creature item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default CreatureList
