import { useState } from 'react'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import WeaponList from '../WeaponList/WeaponList'
import './Tabs.css'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Weapons']

function Tabs() {
  const [activeTab, setActiveTab] = useState('Armor')

  return (
    <section className="tabs">
      <header className="tabs__hero">
        <h1>Grounded 2 Field Guide</h1>
        <p>
          A backyard-styled codex for armor, creatures, mutations, resources, and
          weapons inspired by the layered resource tables on the Grounded wiki.
        </p>
      </header>

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
        {activeTab === 'Weapons' && <WeaponList />}
      </div>
    </section>
  )
}

export default Tabs
