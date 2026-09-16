import { useContext, useMemo, useState } from 'react'
import resources from '../../data/resources.json'
import Filters from '../Filters/Filters'
import Resource from '../Resource/Resource'
import List from '../List/List'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getFilterValueCounts,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
function ResourceList() {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Analyzed: ['No', 'Yes'],
      Tier: getUniqueFilterValues(resources.map((item) => normalizeValue(item.tier))),
    }),
    [],
  )

  const counts = useMemo(
    () => ({
      Analyzed: getFilterValueCounts(values.Analyzed, resources, (item, selected) => {
        const key = `resource-analyzed-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        return getCheckboxValue(checkboxState, key) === (selected === 'Yes')
      }),
      Tier: getFilterValueCounts(values.Tier, resources, (item, selected) => normalizeValue(item.tier) === selected),
    }),
    [checkboxState, values],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredResources = resources.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Analyzed: (currentItem, selected) =>
        getCheckboxValue(
          checkboxState,
          `resource-analyzed-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        ) === (selected === 'Yes'),
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    })
  })

  return (
    <>
      <Filters
        categories={['Analyzed', 'Tier']}
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
      <List className="resource-list" items={filteredResources} renderItem={(item) => <Resource item={item} />} />
    </>
  )
}

export default ResourceList
