import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  container,
  heading
} from '../css/layout.module.css';
import Hero from './hero';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className={container}>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
