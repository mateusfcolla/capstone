import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as LogoLight } from '../../assets/img/logo-light.svg';
import './header.styles.scss';

const Header = () => {

    const location = useLocation();
    const { currentUser } = useContext(UserContext);

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
                <Link to="/">
                    <LogoLight className="logo"/>
                </Link>
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

                { currentUser && <Link className="c-button primary outline" to="/logout">Logout</Link>}

                { !currentUser && <Link className="c-button primary" to="/login">Login</Link>}

            </div>
        </header>
    );
}

export default Header;