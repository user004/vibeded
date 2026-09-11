function Mutation({ item }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Active: {item.active ? 'Yes' : 'No'}</p>

      {Array.isArray(item.ranks) && item.ranks.length > 0 && (
        <div>
          <h4>Ranks</h4>
          <ul>
            {item.ranks.map((rankInfo, index) => (
              <li key={`${item.name}-rank-${index}`}>
                <p>Rank: {rankInfo.rank}</p>
                <p>Effect: {rankInfo.effect}</p>
                <p>Obtained: {rankInfo.obtained}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Mutation
