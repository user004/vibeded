import { useContext, useMemo, useState } from 'react'
import armor from '../../data/armor.json'
import Filters from '../Filters/Filters'
import Armor from '../Armor/Armor'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { filterBySelectedFilters, getCheckboxValue, normalizeValue } from '../listFilterUtils'
import './ArmorList.css'

function ArmorList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})

  const values = useMemo(
    () => ({
      Owned: ['Yes', 'No'],
      Archetype: ['None', ...new Set(armor.map((item) => item.archetype).filter(Boolean))],
      Tier: [...new Set(armor.map((item) => normalizeValue(item.tier)))],
      Slot: [...new Set(armor.map((item) => item.slot).filter(Boolean))],
    }),
    [],
  )

  const filteredArmor = armor.filter((item) =>
    filterBySelectedFilters(item, selectedFilters, {
      Owned: (_, selected) => (selected === 'Yes' ? getCheckboxValue(checkboxState, `armor-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) : !getCheckboxValue(checkboxState, `armor-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)),
      Archetype: (currentItem, selected) =>
        selected === 'None' ? !currentItem.archetype : currentItem.archetype === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
      Slot: (currentItem, selected) => currentItem.slot === selected,
    }),
  )

  const handleFilterChange = (category, value) =>
    setSelectedFilters((current) => ({ ...current, [category]: value }))

  const handleClearFilters = () => setSelectedFilters({})

  return (
    <>
      <Filters
        categories={['Owned', 'Archetype', 'Tier', 'Slot']}
        values={values}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      <ul className="armor-list">
        {filteredArmor.map((item) => (
          <li className="armor-list__item" key={item.name}>
            <Armor item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ArmorList
