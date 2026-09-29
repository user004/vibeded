import { useState } from 'react'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import StatusList from '../StatusList/StatusList'
import TrinketList from '../TrinketList/TrinketList'
import WeaponList from '../WeaponList/WeaponList'
import { TitleScope } from '../Title/Title'
import './Tabs.css'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Statuses', 'Trinkets', 'Weapons']

function Tabs() {
  const [activeTab, setActiveTab] = useState('Armor')

  return (
    <TitleScope>
      <section className="tabs">
        <div className="tabs__nav" aria-label="Categories" role="tablist">
          {TAB_KEYS.map((tab) => (
            <button
              key={tab}
              type="button"
              className="tabs__button"
              role="tab"
              aria-selected={activeTab === tab}
              data-active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tabs__panel">
          {activeTab === 'Armor' && <ArmorList title={activeTab} />}
          {activeTab === 'Creatures' && <CreatureList title={activeTab} />}
          {activeTab === 'Mutations' && <MutationList title={activeTab} />}
          {activeTab === 'Resources' && <ResourceList title={activeTab} />}
          {activeTab === 'Statuses' && <StatusList title={activeTab} />}
          {activeTab === 'Trinkets' && <TrinketList title={activeTab} />}
          {activeTab === 'Weapons' && <WeaponList title={activeTab} />}
        </div>
      </section>
    </TitleScope>
  )
}

export default Tabs
