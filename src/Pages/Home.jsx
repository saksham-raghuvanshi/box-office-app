import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState(' ');

  console.log(search);
  const onSearchInputChange = ev => {
    //target means input value measns that enter check from dev console
    setSearch(ev.target.value);
    console.log(setSearch);
  };

  const onSearch = async ev => {
    // for prevent loading on search
    ev.preventDefault();

    // fetch data from api // response
    //await always work with async function
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=${search}'
    );
    const body = await response.json();

    console.log(body);

    //
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={search}
          onChange={onSearchInputChange}
          placeholder="Search for something"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
