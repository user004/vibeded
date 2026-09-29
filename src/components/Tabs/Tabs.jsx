import { Tabs as MantineTabs } from '@mantine/core'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import StatusList from '../StatusList/StatusList'
import TrinketList from '../TrinketList/TrinketList'
import WeaponList from '../WeaponList/WeaponList'
import { TitleScope } from '../Title/Title'

function Tabs() {
  return (
    <TitleScope>
      <MantineTabs defaultValue="armor">
        <MantineTabs.List aria-label="Categories">
          <MantineTabs.Tab value="armor">Armor</MantineTabs.Tab>
          <MantineTabs.Tab value="creatures">Creatures</MantineTabs.Tab>
          <MantineTabs.Tab value="mutations">Mutations</MantineTabs.Tab>
          <MantineTabs.Tab value="resources">Resources</MantineTabs.Tab>
          <MantineTabs.Tab value="statuses">Statuses</MantineTabs.Tab>
          <MantineTabs.Tab value="trinkets">Trinkets</MantineTabs.Tab>
          <MantineTabs.Tab value="weapons">Weapons</MantineTabs.Tab>
        </MantineTabs.List>
        <MantineTabs.Panel value="armor" pt="md" keepMounted={false}>
          <ArmorList title="Armor" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="creatures" pt="md" keepMounted={false}>
          <CreatureList title="Creatures" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="mutations" pt="md" keepMounted={false}>
          <MutationList title="Mutations" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="resources" pt="md" keepMounted={false}>
          <ResourceList title="Resources" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="statuses" pt="md" keepMounted={false}>
          <StatusList title="Statuses" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="trinkets" pt="md" keepMounted={false}>
          <TrinketList title="Trinkets" />
        </MantineTabs.Panel>
        <MantineTabs.Panel value="weapons" pt="md" keepMounted={false}>
          <WeaponList title="Weapons" />
        </MantineTabs.Panel>
      </MantineTabs>
    </TitleScope>
  )
}

export default Tabs
