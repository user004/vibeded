import './List.css'

function List({ children, items, renderItem, className = '', itemClassName = 'list__item', ...props }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <li key={item?.name ?? index} className={itemClassName}>
      {renderItem(item, index)}
    </li>
  ))

  return (
    <ul className={['list', className].filter(Boolean).join(' ')} {...props}>
      {listItems}
    </ul>
  )
}

export default List
