import './List.css'
import Title, { TitleScope } from '../Title/Title'

function List({ children, items, renderItem, title, className = '', itemClassName = 'list__item', columns = 1, style, ...props }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <li key={item?.name ?? index} className={itemClassName}>
      {renderItem(item, index)}
    </li>
  ))

  return (
    <>
      {title && <Title title={title} />}
      <TitleScope>
        <ul
          className={['list', className].filter(Boolean).join(' ')}
          style={{ '--columns': columns, ...style }}
          {...props}
        >
          {listItems}
        </ul>
      </TitleScope>
    </>
  )
}

export default List
