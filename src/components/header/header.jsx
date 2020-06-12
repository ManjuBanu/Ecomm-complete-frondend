import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';
import {auth} from './../../firebase/firebase-util';

const Header = ({current}) =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className="options">
        <Link className='option' to="/shop">
            SHOP
        </Link>
        <Link className='option' to="/contact">
            CONTACT
        </Link>
        {current ? (
        <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
        ) : (
        <Link className='option' to='./signIn' >SIGN IN</Link>)
        }
        </div>
    </div>
)

export default Header;