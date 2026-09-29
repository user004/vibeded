import BootstrapCard from 'react-bootstrap/Card'

function Card({ children, className = '', ...props }) {
  return (
    <BootstrapCard {...props} className={className}>
      <BootstrapCard.Body>{children}</BootstrapCard.Body>
    </BootstrapCard>
  )
}

export default Card
