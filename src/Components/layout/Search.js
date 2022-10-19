import { useRef, useState } from 'react';

import classes from './Search.module.css';

import Card from '../ui/Card';

const Search = (props) => {
  const [enteredFilter, setEnteredFilter] = useState();

  const searchInputRef = useRef();

  return (
    <section className={classes.search}>
      <Card>
        <div className={classes.search_input}>
          <label>Filter Products</label>
          <input
            ref={searchInputRef}
            type='text'
            value={enteredFilter}
            onChange={(e) => setEnteredFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
};

export default Search;
