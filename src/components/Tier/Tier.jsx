import { Chip } from '@mui/material'

const tierColors = {
  1: { backgroundColor: '#868e96', color: '#fff' },
  2: { backgroundColor: '#0ca678', color: '#fff' },
  3: { backgroundColor: '#4263eb', color: '#fff' },
  4: { backgroundColor: '#ae3ec9', color: '#fff' },
  5: { backgroundColor: '#fcc419', color: '#212529' },
}

function toRomanNumeral(value) {
  const numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]

  let remainder = Number.parseInt(value, 10)

  if (!Number.isInteger(remainder) || remainder <= 0) {
    return String(value)
  }

  let result = ''

  for (const [symbol, amount] of numerals) {
    while (remainder >= amount) {
      result += symbol
      remainder -= amount
    }
  }

  return result
}

function Tier({ tier }) {
  const isNumericTier = typeof tier === 'number' || (typeof tier === 'string' && /^\d+$/.test(tier))

  return (
    <Chip
      size="small"
      label={isNumericTier ? toRomanNumeral(tier) : tier}
      aria-label={isNumericTier ? `Tier ${tier}` : undefined}
      title={isNumericTier ? `Tier ${tier}` : undefined}
      sx={isNumericTier ? (tierColors[Number(tier)] ?? tierColors[1]) : undefined}
    />
  )
}

export default Tier
