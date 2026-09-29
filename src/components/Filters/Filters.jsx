import { Box, Button, MenuItem, TextField } from '@mui/material'
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
    <Box component="section" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, alignItems: 'center' }}>
      <TextField
        type="search"
        label="Search"
        size="small"
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by name"
        sx={{ flex: '1 1 14rem' }}
      />
      {categories.map((category) => (
        <TextField
          select
          key={category}
          label={category}
          size="small"
          value={selectedFilters[category] ?? 'all'}
          onChange={(event) => onFilterChange(category, event.target.value)}
          sx={{ minWidth: 140 }}
        >
          <MenuItem value="all">All ({counts[category]?.all ?? 0})</MenuItem>
          {sortFilterValues(category, values[category]).map((value) => {
            const stringValue = String(value)
            const optionCount = counts[category]?.[stringValue] ?? 0
            const optionLabel = value === null ? 'None' : String(value)

            return (
              <MenuItem key={stringValue} value={stringValue}>
                {optionLabel} ({optionCount})
              </MenuItem>
            )
          })}
        </TextField>
      ))}
      <Button variant="outlined" onClick={onClearFilters}>
        Clear
      </Button>
    </Box>
  )
}

export default Filters
