import { useMemo, useState } from 'react'
import resources from '../../data/resources.json'
import Filters from '../Filters/Filters'
import Resource from '../Resource/Resource'
import { filterBySelectedFilters, normalizeValue } from '../listFilterUtils'
import './ResourceList.css'

function ResourceList() {
  const [selectedFilters, setSelectedFilters] = useState({})

  const values = useMemo(
    () => ({
      Tier: [...new Set(resources.map((item) => normalizeValue(item.tier)))],
    }),
    [],
  )

  const filteredResources = resources.filter((item) =>
    filterBySelectedFilters(item, selectedFilters, {
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    }),
  )

  return (
    <>
      <Filters
        categories={['Tier']}
        values={values}
        selectedFilters={selectedFilters}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => setSelectedFilters({})}
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
