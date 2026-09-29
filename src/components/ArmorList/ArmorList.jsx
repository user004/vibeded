import { useContext, useMemo, useState } from 'react'
import armor from '../../data/armor.json'
import Filters from '../Filters/Filters'
import Armor from '../Armor/Armor'
import ArmorSet from '../ArmorSet/ArmorSet'
import List from '../List/List'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import {
  filterBySelectedFilters,
  getCheckboxValue,
  getFilterValueCounts,
  getUniqueFilterValues,
  normalizeValue,
} from '../../utils/listFilterUtils.js'
function ArmorList({ title }) {
  const { checkboxState } = useContext(FieldGuideContext)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const values = useMemo(
    () => ({
      Crafted: ['Yes', 'No'],
      Archetype: getUniqueFilterValues(['None', ...armor.map((item) => normalizeValue(item.archetype))]),
      Tier: getUniqueFilterValues(armor.map((item) => normalizeValue(item.tier))),
      Slot: getUniqueFilterValues(armor.map((item) => item.slot).filter(Boolean)),
    }),
    [],
  )

  const counts = useMemo(
    () => ({
      Crafted: getFilterValueCounts(values.Crafted, armor, (item, selected) => {
        const key = `armor-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        return getCheckboxValue(checkboxState, key) === (selected === 'Yes')
      }),
      Archetype: getFilterValueCounts(values.Archetype, armor, (item, selected) => {
        if (selected === 'None') {
          return item.archetype == null
        }

        return normalizeValue(item.archetype) === selected
      }),
      Tier: getFilterValueCounts(values.Tier, armor, (item, selected) => normalizeValue(item.tier) === selected),
      Slot: getFilterValueCounts(values.Slot, armor, (item, selected) => item.slot === selected),
    }),
    [checkboxState, values],
  )

  const normalizedSearchValue = searchValue.trim().toLowerCase()

  const filteredArmor = armor.filter((item) => {
    if (normalizedSearchValue && !item.name.toLowerCase().includes(normalizedSearchValue)) {
      return false
    }

    return filterBySelectedFilters(item, selectedFilters, {
      Crafted: (currentItem, selected) =>
        (selected === 'Yes'
          ? getCheckboxValue(checkboxState, `armor-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)
          : !getCheckboxValue(checkboxState, `armor-${currentItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)),
      Archetype: (currentItem, selected) =>
        selected === 'None'
          ? currentItem.archetype == null
          : normalizeValue(currentItem.archetype) === selected,
      Tier: (currentItem, selected) => normalizeValue(currentItem.tier) === selected,
      Slot: (currentItem, selected) => currentItem.slot === selected,
    })
  })

  const setEntries = new Map()
  const displayItems = filteredArmor.reduce((entries, item) => {
    if (item.set) {
      let entry = setEntries.get(item.set.name)

      if (!entry) {
        entry = { name: item.set.name, setName: item.set.name, items: [] }
        setEntries.set(item.set.name, entry)
        entries.push(entry)
      }

      entry.items.push(item)
    } else {
      entries.push({ name: item.name, item })
    }

    return entries
  }, [])

  const handleFilterChange = (category, value) =>
    setSelectedFilters((current) => ({ ...current, [category]: value }))

  const handleClearFilters = () => setSelectedFilters({})

  return (
    <>
      <Filters
        categories={['Crafted', 'Archetype', 'Tier', 'Slot']}
        values={values}
        counts={counts}
        selectedFilters={selectedFilters}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onFilterChange={handleFilterChange}
        onClearFilters={() => {
          handleClearFilters()
          setSearchValue('')
        }}
      />
      <List
        title={title}
        className="armor-list"
        columns={3}
        getItemSx={(entry) => entry.setName ? { gridColumn: '1 / -1' } : undefined}
        items={displayItems}
        renderItem={(entry) =>
          entry.setName
            ? <ArmorSet setName={entry.setName} items={entry.items} />
            : <Armor item={entry.item} />
        }
      />
    </>
  )
}

export default ArmorList
