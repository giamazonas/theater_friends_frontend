import { NavLink } from 'react-router-dom'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/shows'>
        {/* <img
          src="https://i.imgur.com/FVHIlLK.jpg"
          alt="TEST" width="50"
        /> */}
      </NavLink>
    </div>
  )
}

export default HeaderLogo