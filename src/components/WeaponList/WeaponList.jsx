import { useContext, useMemo, useState } from 'react'
import { Stack } from '@mantine/core'
import weapons from '../../data/weapons.json'
import Filters from '../Filters/Filters'
import Weapon from '../Weapon/Weapon'
import List from '../List/List'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getFilterValueCounts,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
function WeaponList({ title }) {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Crafted: ['Yes', 'No'],
      Category: getUniqueFilterValues(weapons.map((item) => item.category).filter(Boolean)),
      Tier: getUniqueFilterValues(weapons.map((item) => normalizeValue(item.tier))),
    }),
    [],
  )

  const counts = useMemo(
    () => ({
      Crafted: getFilterValueCounts(values.Crafted, weapons, (item, selected) => {
        const key = `weapon-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        return getCheckboxValue(checkboxState, key) === (selected === 'Yes')
      }),
      Category: getFilterValueCounts(values.Category, weapons, (item, selected) => item.category === selected),
      Tier: getFilterValueCounts(values.Tier, weapons, (item, selected) => normalizeValue(item.tier) === selected),
    }),
    [checkboxState, values],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredWeapons = weapons.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Crafted: (currentItem, selected) =>
        getCheckboxValue(checkboxState, `weapon-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`) ===
        (selected === 'Yes'),
      Category: (currentItem, selected) => currentItem.category === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    })
  })

  return (
    <Stack gap="md">
      <Filters
        categories={['Crafted', 'Category', 'Tier']}
        values={values}
        counts={counts}
        selectedFilters={selectedFilters}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => {
          setSelectedFilters({})
          setSearchValue('')
        }}
      />
      <List
        title={title}
        columns={2}
        items={filteredWeapons} renderItem={(item) => <Weapon item={item} />} />
    </Stack>
  )
}

export default WeaponList
