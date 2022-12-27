import React from 'react'
import './Navigation.css'
import logo from '../../../../img/logo/logo.webp'
import logoWhite from '../../../../img/logo/digrowfa.webp'
import { Link } from 'react-router-dom'
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';

const Navigation = () => {
    return (
        <>
            <nav className='navigation'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12'>
                            <div className='logo'>
                                <Link to='/'>
                                    <img src={logo} alt="Digrowfa Logo" className='img-fluid lightLogo' />
                                    <img src={logoWhite} alt="Digrowfa Logo" className='img-fluid darkLogo' />
                                </Link>
                            </div>
                        </div>
                        <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
                            <div className='navItem'>
                                <ul>
                                    <li>
                                        <form>
                                            <div className='navSearch'>
                                                <SearchOutlined />
                                                <input type="text" name="search" id="search" placeholder='Search' />
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <ShoppingCartOutlined />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            <HeartOutlined />
                                        </Link>
                                    </li>
                                    <Link to="/">
                                        <li>
                                            <button>Become a mentor</button>
                                        </li>
                                    </Link>
                                    <Link to="/login">
                                        <li>Login</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation