import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { sortFilterValues } from '../../utils/listFilterUtils.js'

function Filters({
  categories,
  values,
  counts = {},
  selectedFilters,
  searchValue = '',
  onSearchChange,
  onFilterChange,
  onClearFilters,
}) {
  return (
    <Form className="row g-3 my-3 align-items-end">
      <Col xs={12} md={6} lg={3}>
        <Form.Group controlId="field-guide-search">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name"
          />
        </Form.Group>
      </Col>
      {categories.map((category) => (
        <Col xs={12} sm={6} lg={2} key={category}>
          <Form.Group controlId={`filter-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <Form.Label>{category}</Form.Label>
            <Form.Select
              value={selectedFilters[category] ?? 'all'}
              onChange={(event) => onFilterChange(category, event.target.value)}
            >
              <option value="all">All ({counts[category]?.all ?? 0})</option>
              {sortFilterValues(category, values[category]).map((value) => {
                const stringValue = String(value)
                const optionCount = counts[category]?.[stringValue] ?? 0
                const optionLabel = value === null ? 'None' : String(value)

                return (
                  <option key={stringValue} value={stringValue}>
                    {optionLabel} ({optionCount})
                  </option>
                )
              })}
            </Form.Select>
          </Form.Group>
        </Col>
      ))}
      <Col xs="auto">
        <Button type="button" variant="secondary" onClick={onClearFilters}>
          Clear
        </Button>
      </Col>
    </Form>
  )
}

export default Filters
