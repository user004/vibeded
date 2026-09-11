import { useState } from 'react'
import ArmorList from '../ArmorList/ArmorList'
import CreatureList from '../CreatureList/CreatureList'
import MutationList from '../MutationList/MutationList'
import ResourceList from '../ResourceList/ResourceList'
import WeaponList from '../WeaponList/WeaponList'

const TAB_KEYS = ['Armor', 'Creatures', 'Mutations', 'Resources', 'Weapons']

function Tabs() {
  const [activeTab, setActiveTab] = useState('Armor')

  return (
    <section>
      <div>
        {TAB_KEYS.map((tab) => (
          <button key={tab} type="button" onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <div>
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
