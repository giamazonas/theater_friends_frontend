import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <ul>
        {props.user ?
          <>
            <li> <NavLink to='/shows'>Upcoming Shows</NavLink></li>
            <li><NavLink to='/shows/myshows'>My shows</NavLink></li>
            <li><NavLink to='/shows/addshow'>Add a Show</NavLink></li>
            <li> <NavLink to='/shows/:id'></NavLink></li>
            <li onClick={() => props.handleLogout()}>Log out</li>
          </>
          :
          <>
            <li> <NavLink to='/login'>Login</NavLink></li>
            <li> <NavLink to='/signup'>Signup</NavLink></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Nav