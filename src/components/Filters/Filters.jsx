import { sortFilterValues } from '../../utils/listFilterUtils.js'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { NativeSelect, NativeSelectOption } from '../ui/native-select'

function Filters({
  categories,
  values,
  counts = {},
  selectedFilters,
  searchValue = '',
  onSearchChange,
  onFilterChange,
  onClearFilters,
}) {
  return (
    <section className="mb-6 flex flex-wrap items-end gap-3" aria-label="Filters">
      <label className="grid min-w-48 flex-1 gap-1 text-sm">
        <span>Search</span>
        <Input
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name"
        />
      </label>
      {categories.map((category) => (
        <label className="grid gap-1 text-sm" key={category}>
          <span>{category}</span>
          <NativeSelect
            value={selectedFilters[category] ?? 'all'}
            onChange={(event) => onFilterChange(category, event.target.value)}
          >
            <NativeSelectOption value="all">All ({counts[category]?.all ?? 0})</NativeSelectOption>
            {sortFilterValues(category, values[category]).map((value) => {
              const stringValue = String(value)
              const optionCount = counts[category]?.[stringValue] ?? 0
              const optionLabel = value === null ? 'None' : String(value)

              return (
                <NativeSelectOption key={stringValue} value={stringValue}>
                  {optionLabel} ({optionCount})
                </NativeSelectOption>
              )
            })}
          </NativeSelect>
        </label>
      ))}
      <Button type="button" variant="outline" onClick={onClearFilters}>
        Clear
      </Button>
    </section>
  )
}

export default Filters
