export function normalizeValue(value) {
  return value == null ? 'None' : String(value)
}

export function getCheckboxValue(checkboxState, key) {
  return Boolean(checkboxState[key])
}

export function filterBySelectedFilters(item, selectedFilters, matchers) {
  return Object.entries(selectedFilters).every(([category, selectedValue]) => {
    if (!selectedValue || selectedValue === 'all') {
      return true
    }

    return matchers[category]?.(item, selectedValue) ?? true
  })
}
