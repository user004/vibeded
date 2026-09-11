import resources from '../../data/resources.json'
import Resource from '../Resource/Resource'

function ResourceList() {
  return (
    <ul>
      {resources.map((item) => (
        <li key={item.name}>
          <Resource item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ResourceList
