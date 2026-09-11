import mutations from '../../data/mutations.json'
import Mutation from '../Mutation/Mutation'

function MutationList() {
  return (
    <ul>
      {mutations.map((item) => (
        <li key={item.name}>
          <Mutation item={item} />
        </li>
      ))}
    </ul>
  )
}

export default MutationList
