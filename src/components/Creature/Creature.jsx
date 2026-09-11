function Creature({ item }) {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Tier: {item.tier}</p>
      {item.summonedWith && <p>Summoned With: {item.summonedWith}</p>}

      {Array.isArray(item.environments) && item.environments.length > 0 && (
        <div>
          <h4>Environments</h4>
          <ul>
            {item.environments.map((environment, index) => (
              <li key={`${item.name}-environment-${index}`}>{environment}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(item.loot) && item.loot.length > 0 && (
        <div>
          <h4>Loot</h4>
          <ul>
            {item.loot.map((lootItem, index) => (
              <li key={`${item.name}-loot-${index}`}>{lootItem}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Creature
