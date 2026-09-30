import './Icon.css'

function Icon({ src, alt = '', className, size = '' }) {
  const sizeClassName = size === 'sm' || size === 'lg' ? size : ''

  return <img className={['icon', sizeClassName, className].filter(Boolean).join(' ')} src={`${import.meta.env.BASE_URL}${src}`} alt={alt} />
}

export default Icon
