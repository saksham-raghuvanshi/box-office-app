import { useState } from 'react';
import { searchforshow, searchforactor } from '../Api/tvmaze';

const Home = () => {
  const [search, setSearch] = useState(' ');
  const [apiData, setApiData] = useState(null); //[]
  const [apidataerror, setapidataerror] = useState(null);
  const [searchoption, setSearchoption] = useState('shows');

  console.log(search);
  const onSearchInputChange = ev => {
    //target means input value measns that enter check from dev console
    setSearch(ev.target.value);
    console.log(setSearch);
  };

  const OnRadiochange = ev => {
    setSearchoption(ev.target.value);
  };

  const onSearch = async ev => {
    // for prevent loading on search
    ev.preventDefault();

    // const trimmedSearch = search.trim();
    // // fetch data from api // response
    // //await always work with async function
    // const response = await fetch(
    //   'https://api.tvmaze.com/search/shows?q=' + trimmedSearch
    // );
    // const body = await response.json();

    // console.log(body);

    // const result = await searchforshow(search);
    // setApiData(result);

    //for catch error use try catch

    try {
      //every time refresh its value 0
      setapidataerror(null);

      if (searchoption === 'shows') {
        const result = await searchforshow(search);
        setApiData(result);
      } else {
        const result = await searchforactor(search);
        setApiData(result);
      }
    } catch (error) {
      setapidataerror(error);
    }
  };

  const renderApiData = () => {
    if (apidataerror) {
      return <div>Error occured: {apidataerror.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
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

      {/* <div>
        {apiData.map(dataif () => (
          <div key={data.show.id}>{data.show.name}</div>
        ))}
      </div> */}

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
