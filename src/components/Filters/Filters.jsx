import './Filters.css'
import { sortFilterValues } from '../../utils/listFilterUtils.js'

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
    <section className="filters">
      <label className="filters__group filters__group--search">
        <span className="filters__label">Search</span>
        <input
          type="search"
          className="filters__search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name"
        />
      </label>
      {categories.map((category) => (
        <label className="filters__group" key={category}>
          <span className="filters__label">{category}</span>
          <select
            className="filters__select"
            value={selectedFilters[category] ?? 'all'}
            onChange={(event) => onFilterChange(category, event.target.value)}
          >
            <option value="all">All ({counts[category]?.all ?? 0})</option>
            {sortFilterValues(category, values[category]).map((value) => {
              const stringValue = String(value)
              const optionCount = counts[category]?.[stringValue] ?? 0
              const optionLabel = value === null ? 'None' : String(value)

              return (
                <option key={stringValue} value={stringValue}>
                  {optionLabel} ({optionCount})
                </option>
              )
            })}
          </select>
        </label>
      ))}
      <button type="button" className="filters__clear" onClick={onClearFilters}>
        Clear
      </button>
    </section>
  )
}

export default Filters
