import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading
} from './layout.module.css'
import Navbar from './navbar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className={container}>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout