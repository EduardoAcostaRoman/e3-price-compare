import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='#' className={classes.logo}>
        <img src='images/shopping cart 2.png' alt='logo' />
        <div>
          <span className={classes.e3logo}>E3</span> Price Compare
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Search</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/stores'>Stores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
