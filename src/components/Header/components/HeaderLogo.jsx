import { NavLink } from 'react-router-dom'
// import Logo from '../../../assets/header-logo.svg'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        <img
          src={"../public/faviconCOLOR.ico"}
          alt="TEST"
        />
      </NavLink>
    </div>
  )
}

export default HeaderLogo