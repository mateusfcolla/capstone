import { Link, useLocation } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {

    const location = useLocation();

    const menus = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact', path: '/contact' }
    ]

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path ? 'active menu-item' : 'menu-item';
        } else {
            return location.pathname.includes(path) ? 'active menu-item' : 'menu-item';
        }
    }

    return (
        <header className="c-header">
            <div className="logo-wrapper">
                <Link to="/" className="logo">Crown Clothing</Link>
            </div>
            <div className="menu-wrapper">
                <div className="menu">
                    {
                        menus.map( (menu, index) =>
                            <Link to={menu.path} key={'menu-item-'+index} className={ isActive(menu.path) }>
                                {menu.name }
                            </Link>
                        )
                    }
                </div>

                <Link className="c-button primary" to="/login">Login</Link>
                <Link className="c-button" to="/register">Register</Link>

            </div>
        </header>
    );
}

export default Header;