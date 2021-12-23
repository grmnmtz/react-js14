import React from 'react'

import { Link } from 'react-router-dom'

export default function AppContainer({ children }) {
  return (
    <div className="main">
      <nav className="main-nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="users">
          Users
        </Link>
      </nav>
      <div className="main-content">{children}</div>
    </div>
  )
}
