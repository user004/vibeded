import './Hero.css'
import Title from '../Title/Title'

function Hero() {
  return (
    <header className="hero">
      <Title title="Grounded 2 Field Guide" />
      <p>
        A backyard-styled codex for armor, creatures, mutations, resources, and
        weapons inspired by the layered resource tables on the Grounded wiki.
      </p>
    </header>
  )
}

export default Hero
