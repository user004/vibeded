import Title, { TitleScope } from '../Title/Title'

function List({ children, items, renderItem, title, className = '', itemClassName = '', columns = 1, style, ...props }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <li key={item?.name ?? index} className={[itemClassName, item?.setName && 'sm:col-span-2 lg:col-span-3'].filter(Boolean).join(' ')}>
      {renderItem(item, index)}
    </li>
  ))

  return (
    <>
      {title && <Title title={title} />}
      <TitleScope>
        <ul
          className={['grid list-none gap-4 p-0', columns >= 2 && 'sm:grid-cols-2', columns >= 3 && 'lg:grid-cols-3', columns >= 4 && 'xl:grid-cols-4', className].filter(Boolean).join(' ')}
          style={style}
          {...props}
        >
          {listItems}
        </ul>
      </TitleScope>
    </>
  )
}

export default List
