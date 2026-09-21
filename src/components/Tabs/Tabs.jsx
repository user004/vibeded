import { useState } from 'react'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import StatusList from '../StatusList/StatusList'
import WeaponList from '../WeaponList/WeaponList'
import './Tabs.css'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Statuses', 'Weapons']

function Tabs() {
  const [activeTab, setActiveTab] = useState('Armor')

  return (
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
        {activeTab === 'Armor' && <ArmorList />}
        {activeTab === 'Creatures' && <CreatureList />}
        {activeTab === 'Mutations' && <MutationList />}
        {activeTab === 'Resources' && <ResourceList />}
        {activeTab === 'Statuses' && <StatusList />}
        {activeTab === 'Weapons' && <WeaponList />}
      </div>
    </section>
  )
}

export default Tabs
