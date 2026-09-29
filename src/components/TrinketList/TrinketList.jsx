import { useContext, useMemo, useState } from 'react'
import trinkets from '../../data/trinkets.json'
import Filters from '../Filters/Filters'
import List from '../List/List'
import Trinket from '../Trinket/Trinket'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getFilterValueCounts,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'

function TrinketList({ title }) {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Crafted: ['Yes', 'No'],
      Tier: getUniqueFilterValues(trinkets.map((item) => normalizeValue(item.tier))),
    }),
    [],
  )

  const checkboxKey = (item) => `trinket-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  const counts = useMemo(
    () => ({
      Crafted: getFilterValueCounts(values.Crafted, trinkets, (item, selected) =>
        getCheckboxValue(checkboxState, checkboxKey(item)) === (selected === 'Yes'),
      ),
      Tier: getFilterValueCounts(values.Tier, trinkets, (item, selected) => normalizeValue(item.tier) === selected),
    }),
    [checkboxState, values],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()
  const filteredTrinkets = trinkets.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) return false

    return filterBySelectedFilters(item, selectedFilters, {
      Crafted: (currentItem, selected) =>
        getCheckboxValue(checkboxState, checkboxKey(currentItem)) === (selected === 'Yes'),
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    })
  })

  return (
    <>
      <Filters
        categories={['Crafted', 'Tier']}
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
        className="trinket-list"
        columns={2}
        items={filteredTrinkets} renderItem={(item) => <Trinket item={item} />} />
    </>
  )
}

export default TrinketList
