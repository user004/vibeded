import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Title, { TitleScope } from '../Title/Title'

function List({ children, items, renderItem, title, columns = 1 }) {
  const listItems = children ?? (items ?? []).map((item, index) => (
    <Col as="li" key={item?.name ?? index} xs={12} md={columns > 1 ? 6 : 12} lg={columns > 2 ? 12 / columns : undefined}>
      {renderItem(item, index)}
    </Col>
  ))

  return (
    <>
      {title && <Title title={title} />}
      <TitleScope>
        <Row as="ul" className="list-unstyled g-3">
          {listItems}
        </Row>
      </TitleScope>
    </>
  )
}

export default List
