import classes from './NavBar.module.css';
import { ReactComponent as LightIcon } from "../../icons/light-icon.svg";
import { ReactComponent as DarkIcon } from "../../icons/dark-icon.svg";
import { ReactComponent as LogoutIcon } from "../../icons/logout-icon.svg";
import { ReactComponent as ProfileIcon } from "../../icons/profile-icon.svg";

import { Link } from 'react-router';

interface NavBarProps {
    isLoggedIn: boolean;
    isDarkMode: boolean;
    toggleTheme: () => void;
}
const NavBar = ({isLoggedIn, toggleTheme, isDarkMode}: NavBarProps) => {
    return (
        <header className={classes['nav-container']}>
            <nav className={classes['nav-body']}>
                <Link to='/' ><div><h3>ToDoosey</h3></div></Link>
                <div className={classes['nav-bar']}>
                    {isLoggedIn &&
                        <>
                            <div className={classes['nav-link']}><LogoutIcon className={classes.icon} /><span>Logout</span></div>
                            <div className={classes['nav-link']}><ProfileIcon className={classes.icon} /><span>Profile</span></div>
                        </>}
                    <div onClick={toggleTheme} className={classes['nav-link']}>
                        {isDarkMode ?
                            <><DarkIcon className={classes.icon} /><span>Dark Mode</span></>:
                            <><LightIcon className={classes.icon} /><span>Light Mode</span></>}

                    </div>
                </div>

            </nav>
        </header>
    );
}

export default NavBar;