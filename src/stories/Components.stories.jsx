import { useState } from 'react'
import Accordion from '../components/Accordion/Accordion'
import App from '../components/App/App'
import Armor from '../components/Armor/Armor'
import ArmorList from '../components/ArmorList/ArmorList'
import ArmorSet from '../components/ArmorSet/ArmorSet'
import Card from '../components/Card/Card'
import Checkbox from '../components/Checkbox/Checkbox'
import Creature from '../components/Creature/Creature'
import CreatureList from '../components/CreatureList/CreatureList'
import Filters from '../components/Filters/Filters'
import Hero from '../components/Hero/Hero'
import Icon from '../components/Icon/Icon'
import ItemHeader from '../components/ItemHeader/ItemHeader'
import List from '../components/List/List'
import Mutation from '../components/Mutation/Mutation'
import MutationList from '../components/MutationList/MutationList'
import Recipe from '../components/Recipe/Recipe'
import RecipeList from '../components/RecipeList/RecipeList'
import Repair from '../components/Repair/Repair'
import Resource from '../components/Resource/Resource'
import ResourceList from '../components/ResourceList/ResourceList'
import Status from '../components/Status/Status'
import StatusList from '../components/StatusList/StatusList'
import Tabs from '../components/Tabs/Tabs'
import Tag from '../components/Tag/Tag'
import Tier from '../components/Tier/Tier'
import Tooltip from '../components/Tooltip/Tooltip'
import Trinket from '../components/Trinket/Trinket'
import TrinketList from '../components/TrinketList/TrinketList'
import Weapon from '../components/Weapon/Weapon'
import WeaponList from '../components/WeaponList/WeaponList'
import { FieldGuideContext, FieldGuideProvider } from '../context/FieldGuideContext'
import armor from '../data/armor.json'
import creatures from '../data/creatures.json'
import mutations from '../data/mutations.json'
import resources from '../data/resources.json'
import statuses from '../data/statuses.json'
import trinkets from '../data/trinkets.json'
import weapons from '../data/weapons.json'

const first = (items) => items[0]
const armorSetItems = armor.filter((item) => item.set?.name === 'Red Ant Armor')
const sampleRecipe = {
  station: 'Workbench',
  ingredients: [
    { name: 'Red Ant Part', quantity: 3 },
    { name: 'Mite Fuzz', quantity: 5 },
  ],
}

function WithFieldGuide({ children }) {
  return <FieldGuideProvider>{children}</FieldGuideProvider>
}

function CheckedCheckbox() {
  const [checkboxState, setCheckboxState] = useState({ checked: true })
  return (
    <FieldGuideContext.Provider value={{
      checkboxState,
      setCheckboxChecked: (key, checked) => setCheckboxState((current) => ({ ...current, [key]: checked })),
    }}>
      <Checkbox checkboxKey="checked" icon="✓" label="Completed" />
    </FieldGuideContext.Provider>
  )
}

const meta = {
  title: 'Components/All components',
  component: Card,
  decorators: [(Story) => <WithFieldGuide><Story /></WithFieldGuide>],
  parameters: { layout: 'padded' },
}

export default meta

export const Application = { render: () => <App /> }
export const HeroBanner = { render: () => <Hero /> }
export const TabsAndDataViews = { render: () => <Tabs /> }

export const AccordionClosed = {
  render: () => <Accordion summary="Closed details"><p>Content is revealed when opened.</p></Accordion>,
}
export const AccordionOpen = {
  render: () => <Accordion summary="Open details" defaultOpen><p>Expanded content.</p></Accordion>,
}
export const CardDefault = { render: () => <Card><ItemHeader title="Field Guide Card" tier={2} /></Card> }
export const CheckboxStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Checkbox checkboxKey="unchecked" icon="🔨" label="Unchecked" />
      <CheckedCheckbox />
    </div>
  ),
}
export const TierVariations = {
  render: () => <div style={{ display: 'flex', gap: '1rem' }}><Tier tier={1} /><Tier tier="4" /><Tier tier="Special" /></div>,
}
export const StatusIcon = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Icon src={first(statuses).icon} alt={first(statuses).name} size="small" />
      <Icon src={first(statuses).icon} alt={first(statuses).name} />
      <Icon src={first(statuses).icon} alt={first(statuses).name} size="large" />
    </div>
  ),
}
export const Tags = {
  render: () => <div style={{ display: 'flex', gap: '0.5rem' }}><Tag tag="Crafted" /><Tag tag="Neutral" /><Tag tag="Rare" /></div>,
}
export const ItemHeaderVariations = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <ItemHeader title="Tiered item" tier={3} tags={<Tag tag="Weapons" />} />
      <ItemHeader title="Icon item" icon="🧪" tags={<Tag tag="Resource" />} />
    </div>
  ),
}
export const ListVariations = {
  render: () => (
    <List columns={3} items={[{ name: 'One' }, { name: 'Two' }, { name: 'Three' }]} renderItem={(item) => <Card>{item.name}</Card>} />
  ),
}
export const FiltersDefault = {
  render: () => (
    <Filters
      categories={['Category', 'Tier']}
      values={{ Category: ['Crafted', 'Natural'], Tier: [1, 2] }}
      counts={{ Category: { all: 4, Crafted: 2, Natural: 2 }, Tier: { all: 4, 1: 3, 2: 1 } }}
      selectedFilters={{}}
      onSearchChange={() => {}}
      onFilterChange={() => {}}
      onClearFilters={() => {}}
    />
  ),
}
export const FiltersWithSearch = {
  render: () => (
    <Filters
      categories={['Category']}
      values={{ Category: ['Combat'] }}
      counts={{ Category: { all: 2, Combat: 2 } }}
      selectedFilters={{ Category: 'Combat' }}
      searchValue="ant"
      onSearchChange={() => {}}
      onFilterChange={() => {}}
      onClearFilters={() => {}}
    />
  ),
}
export const TooltipKnownStatus = { render: () => <Tooltip name={first(statuses).name} /> }
export const TooltipLabelOnly = { render: () => <Tooltip name="Unknown status" label="A custom tooltip description">Hover me</Tooltip> }
export const RecipeWithStation = { render: () => <Recipe recipe={sampleRecipe} itemName="Sample" recipeIndex={0} /> }
export const RecipeIngredientsOnly = { render: () => <Recipe recipe={sampleRecipe.ingredients} itemName="Sample" recipeIndex={0} /> }
export const RecipeListMultiple = { render: () => <RecipeList recipes={[sampleRecipe, { ingredients: [{ name: 'Crude Rope', quantity: 2 }] }]} itemName="Sample" /> }
export const RepairMaterials = { render: () => <Repair repairs={first(weapons).repair} itemName="Weapon" /> }
export const RepairEmpty = { render: () => <Repair repairs={[]} /> }

export const ArmorCard = { render: () => <Armor item={first(armor)} /> }
export const ArmorSetCard = { render: () => <ArmorSet setName="Red Ant Armor" items={armorSetItems} /> }
export const CreatureCard = { render: () => <Creature item={first(creatures)} /> }
export const MutationCard = { render: () => <Mutation item={first(mutations)} /> }
export const ResourceCard = { render: () => <Resource item={first(resources)} /> }
export const StatusCard = { render: () => <Status item={first(statuses)} /> }
export const TrinketCard = { render: () => <Trinket item={first(trinkets)} /> }
export const WeaponCard = { render: () => <Weapon item={first(weapons)} /> }

export const ArmorCatalog = { render: () => <ArmorList /> }
export const CreatureCatalog = { render: () => <CreatureList /> }
export const MutationCatalog = { render: () => <MutationList /> }
export const ResourceCatalog = { render: () => <ResourceList /> }
export const StatusCatalog = { render: () => <StatusList /> }
export const TrinketCatalog = { render: () => <TrinketList /> }
export const WeaponCatalog = { render: () => <WeaponList /> }
