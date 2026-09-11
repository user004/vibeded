import { useMemo, useState } from 'react'
import mutations from '../../data/mutations.json'
import Filters from '../Filters/Filters'
import Mutation from '../Mutation/Mutation'
import { filterBySelectedFilters, normalizeValue } from '../listFilterUtils'
import './MutationList.css'

function MutationList() {
  const [selectedFilters, setSelectedFilters] = useState({})

  const values = useMemo(
    () => ({
      Category: [...new Set(mutations.map((item) => item.category).filter(Boolean))],
      Active: ['Yes', 'No'],
    }),
    [],
  )

  const filteredMutations = mutations.filter((item) =>
    filterBySelectedFilters(item, selectedFilters, {
      Category: (currentItem, selected) => currentItem.category === selected,
      Active: (currentItem, selected) => Boolean(currentItem.active) === (selected === 'Yes'),
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
    }),
  )

  return (
    <>
      <Filters
        categories={['Category', 'Active']}
        values={values}
        selectedFilters={selectedFilters}
        onFilterChange={(category, value) => setSelectedFilters((current) => ({ ...current, [category]: value }))}
        onClearFilters={() => setSelectedFilters({})}
      />
      <ul className="mutation-list">
        {filteredMutations.map((item) => (
          <li className="mutation-list__item" key={item.name}>
            <Mutation item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default MutationList
