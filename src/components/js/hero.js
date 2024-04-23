import * as React from 'react'
import * as styles from '../css/hero.module.css'

import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.textSide}>
        <h1>Designer.</h1>
        <h1>Developer.</h1>
        <h1>Programmer.</h1>
        <h1>Photographer.</h1>
      </div>
      <div className={styles.imageSide}>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../../images/example.png"
        />
      </div>
    </header>
  )
}

export default Hero
