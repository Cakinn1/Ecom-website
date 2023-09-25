import { Link } from 'react-router-dom'
import { BurgerMenuProps } from '../../types/Types'



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
