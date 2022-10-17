import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E3 Price-Compare</div>
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
