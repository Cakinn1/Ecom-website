import React from 'react'
import { Link } from 'react-router-dom'

interface BurgerMenuProps {
handleBurgerMenu: () => void
title: string
linkto: string
}

export default function BurgerMenuLinks({handleBurgerMenu, linkto, title}: BurgerMenuProps) {
  return (
    <Link to={`${linkto}`}>
    <li
      onClick={() => handleBurgerMenu()}
      className="nav-links"
    >
      {title}
    </li>
  </Link>
  )
}
