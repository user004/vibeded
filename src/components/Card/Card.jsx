import './Card.css'

function Card({ children, className = '', ...props }) {
  return (
    <article {...props} className={['card', className].filter(Boolean).join(' ')}>
      {children}
    </article>
  )
}

export default Card
