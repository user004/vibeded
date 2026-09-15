import { useContext, useMemo, useState } from 'react'
import armor from '../../data/armor.json'
import Filters from '../Filters/Filters'
import Armor from '../Armor/Armor'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
import './ArmorList.css'

function ArmorList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Owned: ['Yes', 'No'],
      Archetype: getUniqueFilterValues(['None', ...armor.map((item) => normalizeValue(item.archetype))]),
      Tier: getUniqueFilterValues(armor.map((item) => normalizeValue(item.tier))),
      Slot: getUniqueFilterValues(armor.map((item) => item.slot).filter(Boolean)),
    }),
    [],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredArmor = armor.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Owned: (currentItem, selected) =>
        (selected === 'Yes'
          ? getCheckboxValue(checkboxState, `armor-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)
          : !getCheckboxValue(checkboxState, `armor-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)),
      Archetype: (currentItem, selected) =>
        selected === 'None'
          ? currentItem.archetype == null
          : normalizeValue(currentItem.archetype) === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
      Slot: (currentItem, selected) => currentItem.slot === selected,
    })
  })

  const handleFilterChange = (category, value) =>
    setSelectedFilters((current) => ({ ...current, [category]: value }))

  const handleClearFilters = () => setSelectedFilters({})

  return (
    <>
      <Filters
        categories={['Owned', 'Archetype', 'Tier', 'Slot']}
        values={values}
        selectedFilters={selectedFilters}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onFilterChange={handleFilterChange}
        onClearFilters={() => {
          handleClearFilters()
          setSearchValue('')
        }}
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
