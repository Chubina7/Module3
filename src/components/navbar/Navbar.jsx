import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  const links = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'Portfolio' },
    { id: 4, title: 'Blog' },
    { id: 5, title: 'Photos' },
    { id: 6, title: 'Dashboard' },
  ]

  return (
    <div className={styles.container}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map(link => (<div>{link.title}</div>))}
      </div>
    </div>
  )
}