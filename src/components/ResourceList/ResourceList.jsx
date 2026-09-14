import { useMemo, useState } from 'react'
import resources from '../../data/resources.json'
import Filters from '../Filters/Filters'
import Resource from '../Resource/Resource'
import { filterBySelectedFilters, getUniqueFilterValues, normalizeValue } from '../../utils/listFilterUtils.js'
import './ResourceList.css'

function ResourceList() {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Tier: getUniqueFilterValues(resources.map((item) => normalizeValue(item.tier))),
    }),
    [],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredResources = resources.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    })
  })

  return (
    <>
      <Filters
        categories={['Tier']}
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
      <ul className="resource-list">
        {filteredResources.map((item) => (
          <li className="resource-list__item" key={item.name}>
            <Resource item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ResourceList
