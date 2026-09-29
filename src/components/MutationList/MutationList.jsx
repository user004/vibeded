import { useMemo, useState } from 'react'
import mutations from '../../data/mutations.json'
import Filters from '../Filters/Filters'
import Mutation from '../Mutation/Mutation'
import List from '../List/List'
import {
  filterBySelectedFilters,
  getFilterValueCounts,
  getUniqueFilterValues,
} from '../../utils/listFilterUtils.js'
function MutationList({ title }) {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Category: getUniqueFilterValues(mutations.map((item) => item.category).filter(Boolean)),
      Active: ['Yes', 'No'],
    }),
    [],
  )

  const counts = useMemo(
    () => ({
      Category: getFilterValueCounts(values.Category, mutations, (item, selected) => item.category === selected),
      Active: getFilterValueCounts(values.Active, mutations, (item, selected) => Boolean(item.active) === (selected === 'Yes')),
    }),
    [values],
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
      <List title={title} items={filteredMutations} renderItem={(item) => <Mutation item={item} />} />
    </>
  )
}

export default MutationList
