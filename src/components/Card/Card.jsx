import { Card as CardRoot, CardContent } from '../ui/card'

function Card({ children, className = '', ...props }) {
  return (
    <CardRoot {...props} className={className}>
      <CardContent className="grid gap-4">{children}</CardContent>
    </CardRoot>
  )
}

export default Card
