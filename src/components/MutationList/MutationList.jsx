import { useMemo, useState } from 'react'
import mutations from '../../data/mutations.json'
import Filters from '../Filters/Filters'
import Mutation from '../Mutation/Mutation'
import { filterBySelectedFilters, getUniqueFilterValues } from '../../utils/listFilterUtils.js'
import './MutationList.css'

function MutationList() {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Category: getUniqueFilterValues(mutations.map((item) => item.category).filter(Boolean)),
      Active: ['Yes', 'No'],
    }),
    [],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredMutations = mutations.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Category: (currentItem, selected) => currentItem.category === selected,
      Active: (currentItem, selected) => Boolean(currentItem.active) === (selected === 'Yes'),
    })
  })

  return (
    <>
      <Filters
        categories={['Category', 'Active']}
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
