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
          <h1 className={heading}>{pageTitle}</h1> 
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout