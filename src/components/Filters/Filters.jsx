import './Filters.css'

function Filters({ categories, values, selectedFilters, onFilterChange, onClearFilters }) {
  return (
    <section className="filters">
      {categories.map((category) => (
        <label className="filters__group" key={category}>
          <span className="filters__label">{category}</span>
          <select
            className="filters__select"
            value={selectedFilters[category] ?? 'all'}
            onChange={(event) => onFilterChange(category, event.target.value)}
          >
            <option value="all">All</option>
            {values[category]?.map((value) => (
              <option key={String(value)} value={String(value)}>
                {value === null ? 'None' : String(value)}
              </option>
            ))}
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
