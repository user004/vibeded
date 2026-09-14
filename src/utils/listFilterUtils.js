export function normalizeValue(value) {
  return value == null ? 'None' : String(value)
}

export function getUniqueFilterValues(values) {
  return values.filter((value, index, currentValues) => currentValues.indexOf(value) === index)
}

export function sortFilterValues(category, values = []) {
  if (category !== 'Tier') {
    return [...values].sort()
  }

  return [...values].sort((left, right) => {
    if (left === 'None') {
      return -1
    }

    if (right === 'None') {
      return 1
    }

    return Number(left) - Number(right)
  })
}

export function getCheckboxValue(checkboxState, key) {
  return Boolean(checkboxState[key])
}

export function filterBySelectedFilters(item, selectedFilters, matchers) {
  return Object.entries(selectedFilters).every(([category, selectedValue]) => {
    if (!selectedValue || selectedValue === 'all') {
      return true
    }

    const matcher = matchers[category]

    if (!matcher) {
      return false
    }

    return matcher(item, selectedValue)
  })
}
