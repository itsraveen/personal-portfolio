import * as React from 'react'

import {
  container,
  heading
} from '../css/layout.module.css'
import Hero from './hero'
import FooterBar from "./footerbar"


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <main>
          <Hero />

          <FooterBar />
        </main>
      </div>
    </div>
  )
}

export default Layout