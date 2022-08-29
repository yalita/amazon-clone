import React from 'react'
import logo from './amazon-com-light.svg';
import { Link } from 'react-router-dom';
import './styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
 const [{ basket, user }] = useStateValue();

 const login = () => {
   if (user) {
     auth.signOut();
   }
 }

  return (
    <nav className='header'>
        <Link to='/'>
        <img className='header_logo' src={logo}/>
        </Link>
        
        <Link to="/" className='header_link'>
        <div className='header_option'>
        <LocationOnIcon className='location'/>
        <span className='header_optionLineOne'>Send to</span>
        <span className='header_optionLineTwo'> Argentina</span>
        </div>
        </Link>

        <div className='header_search'>
        <input type='text' className="header_searchInput" />
        <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>

        <Link to={!user && "/login"} className='header_link'>
        <div onClick={login} className='header_option'>
        <span className='header_optionLineOne'>Hello, {user?.email}</span>
        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In' }</span>
        </div>
        </Link>

        
        <Link to="/" className='header_link'>
        <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>& Orders</span>
        </div>
        </Link>

        <Link to="/" className='header_link'>
        <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
        </div>
        </Link>

        <Link to='/checkout' className='header_link'>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
        </Link>

        </div>
    </nav>
  )
}

export default Header
