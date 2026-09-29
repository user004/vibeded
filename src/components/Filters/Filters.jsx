import { Button, Group, Select, TextInput } from '@mantine/core'
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
    <Group component="section" align="end" gap="sm" wrap="wrap">
      <TextInput
        label="Search"
        type="search"
        flex={1}
        miw={180}
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by name"
      />
      {categories.map((category) => (
        <Select
          key={category}
          label={category}
          data={[
            { value: 'all', label: `All (${counts[category]?.all ?? 0})` },
            ...sortFilterValues(category, values[category]).map((value) => {
              const stringValue = String(value)
              const optionCount = counts[category]?.[stringValue] ?? 0
              const optionLabel = value === null ? 'None' : String(value)

              return {
                value: stringValue,
                label: `${optionLabel} (${optionCount})`,
              }
            }),
          ]}
          value={selectedFilters[category] ?? 'all'}
          onChange={(value) => onFilterChange(category, value ?? 'all')}
          allowDeselect={false}
          miw={160}
        />
      ))}
      <Button variant="default" onClick={onClearFilters}>Clear</Button>
    </Group>
  )
}

export default Filters
