import { Badge } from '@mantine/core'

const tierColors = {
  1: 'gray',
  2: 'teal',
  3: 'indigo',
  4: 'grape',
  5: 'yellow',
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
    <Badge
      color={tierColors[tier] ?? 'gray'}
      variant="light"
      aria-label={isNumericTier ? `Tier ${tier}` : undefined}
      title={isNumericTier ? `Tier ${tier}` : undefined}
    >
      {isNumericTier ? toRomanNumeral(tier) : tier}
    </Badge>
  )
}

export default Tier
