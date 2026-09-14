import { useContext, useMemo, useState } from 'react'
import weapons from '../../data/weapons.json'
import Filters from '../Filters/Filters'
import Weapon from '../Weapon/Weapon'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
import './WeaponList.css'

function WeaponList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Owned: ['Yes', 'No'],
      Category: getUniqueFilterValues(weapons.map((item) => item.category).filter(Boolean)),
      Tier: getUniqueFilterValues(weapons.map((item) => normalizeValue(item.tier))),
    }),
    [],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredWeapons = weapons.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Owned: (currentItem, selected) =>
        getCheckboxValue(checkboxState, `weapon-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
      Category: (currentItem, selected) => currentItem.category === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    })
  })

  return (
    <>
      <Filters
        categories={['Owned', 'Category', 'Tier']}
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
      <ul className="weapon-list">
        {filteredWeapons.map((item) => (
          <li className="weapon-list__item" key={item.name}>
            <Weapon item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default WeaponList
