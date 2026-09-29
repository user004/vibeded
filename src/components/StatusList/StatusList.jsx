import { useMemo, useState } from 'react'
import statuses from '../../data/statuses.json'
import Filters from '../Filters/Filters'
import List from '../List/List'
import Status from '../Status/Status'
import {
  filterBySelectedFilters,
  getFilterValueCounts,
  getUniqueFilterValues,
} from '../../utils/listFilterUtils.js'

function StatusList({ title }) {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Categories: getUniqueFilterValues(statuses.flatMap((item) => item.categories)),
    }),
    [],
  )

  const counts = useMemo(
    () => ({
      Categories: getFilterValueCounts(values.Categories, statuses, (item, selected) =>
        item.categories.includes(selected),
      ),
    }),
    [values],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()
  const filteredStatuses = statuses.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Categories: (currentItem, selected) => currentItem.categories.includes(selected),
    })
  })

  return (
    <>
      <Filters
        categories={['Categories']}
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
        className="status-list"
        columns={2}
        items={filteredStatuses} renderItem={(item) => <Status item={item} />} />
    </>
  )
}

export default StatusList
