import { useContext, useMemo, useState } from 'react'
import weapons from '../../data/weapons.json'
import Filters from '../Filters/Filters'
import Weapon from '../Weapon/Weapon'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { filterBySelectedFilters, getCheckboxValue, normalizeValue } from '../listFilterUtils'
import './WeaponList.css'

function WeaponList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})

  const values = useMemo(
    () => ({
      Owned: ['Yes', 'No'],
      Category: [...new Set(weapons.map((item) => item.category).filter(Boolean))],
      Tier: [...new Set(weapons.map((item) => normalizeValue(item.tier)))],
    }),
    [],
  )

  const filteredWeapons = weapons.filter((item) =>
    filterBySelectedFilters(item, selectedFilters, {
      Owned: (currentItem, selected) =>
        getCheckboxValue(checkboxState, `weapon-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
      Category: (currentItem, selected) => currentItem.category === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    }),
  )

  return (
    <>
      <Filters
        categories={['Owned', 'Category', 'Tier']}
        values={values}
        selectedFilters={selectedFilters}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => setSelectedFilters({})}
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
