import Badge from 'react-bootstrap/Badge'

function Tag({ tag }) {
  return <Badge bg="secondary" className="me-1">{tag}</Badge>
}

export default Tag
