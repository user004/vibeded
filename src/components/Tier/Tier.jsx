import { Badge } from '../ui/badge'

const tierColors = {
  1: 'border-slate-500 bg-slate-600 text-white',
  2: 'border-teal-500 bg-teal-700 text-white',
  3: 'border-indigo-500 bg-indigo-700 text-white',
  4: 'border-purple-500 bg-purple-800 text-white',
  5: 'border-yellow-400 bg-yellow-500 text-slate-950',
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
      variant="outline"
      className={isNumericTier ? tierColors[String(tier)] : undefined}
      data-tier={isNumericTier ? String(tier) : undefined}
      aria-label={isNumericTier ? `Tier ${tier}` : undefined}
      title={isNumericTier ? `Tier ${tier}` : undefined}
    >
      {isNumericTier ? toRomanNumeral(tier) : tier}
    </Badge>
  )
}

export default Tier
