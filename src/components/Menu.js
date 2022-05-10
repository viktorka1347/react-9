import { NavLink } from 'react-router-dom';

function Menu() {
  const appPath = process.env.PUBLIC_URL;
  
  return (
    <nav className="menu">
      <NavLink to={appPath} className="menu__item" activeClassName="menu__item-active" exact>
        Главная
      </NavLink>
      <NavLink to={appPath + '/drift'} className="menu__item" activeClassName="menu__item-active">
        Дрифт-такси
      </NavLink>
      <NavLink to={appPath + '/timeattack'} className="menu__item" activeClassName="menu__item-active">
        Time Attack
      </NavLink>
      <NavLink to={appPath + '/forza'} className="menu__item" activeClassName="menu__item-active">
        Forza Karting
      </NavLink>
    </nav>    
  )
}

export default Menu;