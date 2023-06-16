import { useState } from 'react';
import { searchforshow, searchforactor } from '../Api/tvmaze';
import Searchform from '../Components/Searchform';
import Showgrid from '../Shows/Showgrid';
import Actorgrid from '../Actor/Actorgrid';

const Home = () => {
  const [apiData, setApiData] = useState(null); //[]
  const [apidataerror, setapidataerror] = useState(null);

  const onSearch = async ({ q, searchoption }) => {
    // for prevent loading on search

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
        const result = await searchforshow(q);
        setApiData(result);
      } else {
        const result = await searchforactor(q);
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

    if (apiData?.length == 0) {
      <div>No Result Found</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <Showgrid shows={apiData} />
      ) : (
        <Actorgrid actors={apiData} />
      );
    }

    return null;
  };
  return (
    <div>
      <Searchform onSearch={onSearch} />

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
