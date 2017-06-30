import React from 'react'

import Logo from './Logo'

const Header = ({ title }) => {
  return (
    <div className="bg-gold sans-serif">
      <div className="mw9 center tc pa4 pt5-ns ph7-l">
        <Logo width="50px" height="50px" fill="currentColor" />
        <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
          <span className="bg-black-90 lh-copy white pa1 tracked-tight">
            {title}
          </span>
        </h3>
      </div>
    </div>
  )
}
export default Header
