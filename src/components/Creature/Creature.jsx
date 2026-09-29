import Checkbox from '../Checkbox/Checkbox'
import { FieldGuideContext } from '../../context/FieldGuideContext'
import { useContext } from 'react'
import Accordion from '../Accordion/Accordion'
import Tag from '../Tag/Tag'
import Card from '../Card/Card'
import ItemHeader from '../ItemHeader/ItemHeader'
import Title from '../Title/Title'
import { Box } from '@mui/material'

function Creature({ item }) {
  const { checkboxState, setCheckboxChecked } = useContext(FieldGuideContext)
  const peepedKey = `creature-peeped-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const goldCardKey = `creature-gold-card-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
  const isGoldCard = Boolean(checkboxState[goldCardKey])

  const handleGoldCardChange = (checked) => {
    setCheckboxChecked(goldCardKey, checked)
    if (checked) {
      setCheckboxChecked(peepedKey, true)
    }
  }

  const handlePeepedChange = (checked) => {
    setCheckboxChecked(peepedKey, checked)
    if (!checked) {
      setCheckboxChecked(goldCardKey, false)
    }
  }

  return (
    <Card
      data-gold-card={isGoldCard}
      sx={(theme) => ({
        position: 'relative',
        ...(isGoldCard && {
          border: `1px solid ${theme.palette.warning.main}`,
          boxShadow: `0 0 0 1px ${theme.palette.warning.main}, 0 0 24px ${theme.palette.warning.main}59`,
          '&::before, &::after': {
            content: '"✨"',
            position: 'absolute',
            pointerEvents: 'none',
            fontSize: '2rem',
            lineHeight: 1,
          },
          '&::before': { insetBlockStart: 0, insetInlineEnd: 0, translate: '25% -25%' },
          '&::after': { insetBlockEnd: 0, insetInlineStart: 0, translate: '-25% 25%' },
        }),
      })}
    >
      <ItemHeader
        title={item.name}
        tier={item.tier}
        checkboxes={
          <>
            <Checkbox checkboxKey={peepedKey} icon="👀" label="Peeped" onChange={handlePeepedChange} />
            <Checkbox checkboxKey={goldCardKey} icon="🥇" label="Gold" onChange={handleGoldCardChange} />
          </>
        }
        tags={
          <>
            <Tag tag={item.category} />
            {item.summonedWith && <Tag tag={`Summoned with ${item.summonedWith}`} />}
          </>
        }
      />

      <Accordion summary="Details">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(16rem, 100%), 1fr))', gap: 1.5 }}>
          {Array.isArray(item.environments) && item.environments.length > 0 && (
            <Box sx={{ display: 'grid', gap: 1, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
              <Title title="Environments" />
              <Box component="ul" sx={{ pl: 2, my: 0, color: 'text.secondary' }}>
                {item.environments.map((environment, index) => (
                  <Box component="li" key={`${item.name}-environment-${index}`}>{environment}</Box>
                ))}
              </Box>
            </Box>
          )}

          {Array.isArray(item.loot) && item.loot.length > 0 && (
            <Box sx={{ display: 'grid', gap: 1, p: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
              <Title title="Loot" />
              <Box component="ul" sx={{ pl: 2, my: 0, color: 'text.secondary' }}>
                {item.loot.map((lootItem, index) => (
                  <Box component="li" key={`${item.name}-loot-${index}`}>{lootItem}</Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Accordion>
    </Card>
  )
}

export default Creature
