import { useState } from 'react';

const Searchform = ({ onSearch }) => {
  const [searchoption, setSearchoption] = useState('shows');
  const [search, setSearch] = useState(' ');

  console.log(search);
  const onSearchInputChange = ev => {
    //target means input value measns that enter check from dev console
    setSearch(ev.target.value);
    console.log(setSearch);
  };

  const OnRadiochange = ev => {
    setSearchoption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: search,
      searchoption,
    };

    onSearch(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          onChange={onSearchInputChange}
          placeholder="Search for something"
        />

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchoption === 'shows'}
            onChange={OnRadiochange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchoption === 'actors'}
            onChange={OnRadiochange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchform;
