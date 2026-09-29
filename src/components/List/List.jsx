import { Box } from '@mui/material'
import Title, { TitleScope } from '../Title/Title'

function List({ children, items, renderItem, title, className = '', itemClassName = '', columns = 1, style, getItemSx, ...props }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <Box component="li" key={item?.name ?? index} className={itemClassName} sx={{ minWidth: 0, ...getItemSx?.(item) }}>
      {renderItem(item, index)}
    </Box>
  ))

  return (
    <>
      {title && <Title title={title} />}
      <TitleScope>
        <Box component="ul"
          className={className}
          style={style}
          sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: `repeat(${Math.min(columns, 2)}, minmax(0, 1fr))`, lg: `repeat(${columns}, minmax(0, 1fr))` }, listStyle: 'none', p: 0, m: 0, mt: title ? 2 : 0 }}
          {...props}
        >
          {listItems}
        </Box>
      </TitleScope>
    </>
  )
}

export default List
