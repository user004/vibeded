import { useState } from 'react'
import BootstrapTabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import StatusList from '../StatusList/StatusList'
import TrinketList from '../TrinketList/TrinketList'
import WeaponList from '../WeaponList/WeaponList'
import { TitleScope } from '../Title/Title'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Statuses', 'Trinkets', 'Weapons']

function Tabs() {
  const [activeTab, setActiveTab] = useState('Armor')

  return (
    <TitleScope>
      <BootstrapTabs
        activeKey={activeTab}
        onSelect={(key) => key && setActiveTab(key)}
        aria-label="Categories"
        className="mt-4"
      >
        {TAB_KEYS.map((tab) => (
          <Tab eventKey={tab} title={tab} key={tab}>
            {tab === 'Armor' && <ArmorList title={tab} />}
            {tab === 'Creatures' && <CreatureList title={tab} />}
            {tab === 'Mutations' && <MutationList title={tab} />}
            {tab === 'Resources' && <ResourceList title={tab} />}
            {tab === 'Statuses' && <StatusList title={tab} />}
            {tab === 'Trinkets' && <TrinketList title={tab} />}
            {tab === 'Weapons' && <WeaponList title={tab} />}
          </Tab>
        ))}
      </BootstrapTabs>
    </TitleScope>
  )
}

export default Tabs
