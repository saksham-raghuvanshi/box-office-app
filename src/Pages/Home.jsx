import { useState } from 'react';
import { searchforshow } from '../Api/tvmaze';

const Home = () => {
  const [search, setSearch] = useState(' ');
  const [apiData, setApiData] = useState(null); //[]
  const [apidataerror, setapidataerror] = useState(null);

  console.log(search);
  const onSearchInputChange = ev => {
    //target means input value measns that enter check from dev console
    setSearch(ev.target.value);
    console.log(setSearch);
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
      const result = await searchforshow(search);
      setApiData(result);
    } catch (error) {
      setapidataerror(error);
    }
  };

  const renderApiData = () => {
    if (apidataerror) {
      return <div>Error occured: {apidataerror.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
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
