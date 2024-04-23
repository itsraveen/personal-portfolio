import * as React from 'react'

import {
  container,
  heading
} from '../css/layout.module.css'
import Hero from './hero'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <main>
          <Hero />


        </main>
      </div>
    </div>
  )
}

export default Layout