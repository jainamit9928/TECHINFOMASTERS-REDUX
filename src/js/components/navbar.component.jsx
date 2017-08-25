import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const homeClass = location.pathname === '/' ? 'active' : ''
    const searchClass = location.pathname.match(/^\/search/) ? 'active' : ''
    const detailsClass = location.pathname.match(/^\/details/) ? 'active' : 'hidden'
    
    return (
        <section className='topbar'>
            <ul  className='topnav nav-right'>
                <li>
                    <Link className={homeClass} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={searchClass} to='/search'>Search</Link>
                </li>
                  <li>
                    <Link className={detailsClass} to={location.pathname}>Details</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar
