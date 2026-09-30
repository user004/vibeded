import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import StatusList from '../StatusList/StatusList'
import TrinketList from '../TrinketList/TrinketList'
import WeaponList from '../WeaponList/WeaponList'
import { TitleScope } from '../Title/Title'
import { Tabs as TabsRoot, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Statuses', 'Trinkets', 'Weapons']

function Tabs() {
  return (
    <TitleScope>
      <TabsRoot defaultValue="Armor" className="gap-6">
        <TabsList aria-label="Categories" className="h-auto max-w-full flex-wrap justify-start gap-1">
          {TAB_KEYS.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="flex-none"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="Armor"><ArmorList title="Armor" /></TabsContent>
        <TabsContent value="Creatures"><CreatureList title="Creatures" /></TabsContent>
        <TabsContent value="Mutations"><MutationList title="Mutations" /></TabsContent>
        <TabsContent value="Resources"><ResourceList title="Resources" /></TabsContent>
        <TabsContent value="Statuses"><StatusList title="Statuses" /></TabsContent>
        <TabsContent value="Trinkets"><TrinketList title="Trinkets" /></TabsContent>
        <TabsContent value="Weapons"><WeaponList title="Weapons" /></TabsContent>
      </TabsRoot>
    </TitleScope>
  )
}

export default Tabs
