import { useState } from 'react'
import { Box, Tab, Tabs as MuiTabs } from '@mui/material'
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
      <Box component="section">
        <MuiTabs value={activeTab} onChange={(_, value) => setActiveTab(value)} variant="scrollable" scrollButtons="auto" aria-label="Categories">
          {TAB_KEYS.map((tab) => (
            <Tab key={tab} value={tab} label={tab} id={`tab-${tab}`} aria-controls={`panel-${tab}`} />
          ))}
        </MuiTabs>

        <Box role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} sx={{ pt: 3 }}>
          {activeTab === 'Armor' && <ArmorList title={activeTab} />}
          {activeTab === 'Creatures' && <CreatureList title={activeTab} />}
          {activeTab === 'Mutations' && <MutationList title={activeTab} />}
          {activeTab === 'Resources' && <ResourceList title={activeTab} />}
          {activeTab === 'Statuses' && <StatusList title={activeTab} />}
          {activeTab === 'Trinkets' && <TrinketList title={activeTab} />}
          {activeTab === 'Weapons' && <WeaponList title={activeTab} />}
        </Box>
      </Box>
    </TitleScope>
  )
}

export default Tabs
