import Title from '../Title/Title'

function Hero() {
  return (
    <header className="space-y-3 border-b pb-6">
      <Title title="Grounded 2 Field Guide" />
      <p className="max-w-2xl text-muted-foreground">
        A backyard-styled codex for armor, creatures, mutations, resources, and
        weapons inspired by the layered resource tables on the Grounded wiki.
      </p>
    </header>
  )
}

export default Hero
