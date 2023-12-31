import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchforshow, searchforactor } from '../Api/tvmaze';
import Searchform from '../Components/Searchform';
import Showgrid from '../Shows/Showgrid';
import Actorgrid from '../Actor/Actorgrid';
import { TextCenter } from '../Common/TextCenter';

const Home = () => {
  // const [apiData, setApiData] = useState(null); //[]
  // const [apidataerror, setapidataerror] = useState(null);

  //last //fetching data wit libraries Lazy quieies

  const [filter, setFilter] = useState('');

  const { data: apiData, error: apidataerror } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchoption === 'shows'
        ? searchforshow(filter.q)
        : searchforactor(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    //it refetch and refresh every time so we need to make it false
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchoption }) => {
    setFilter({ q, searchoption });
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

    // try {
    //   //every time refresh its value 0
    //   setapidataerror(null);

    //   if (searchoption === 'shows') {
    //     const result = await searchforshow(q);
    //     setApiData(result);
    //   } else {
    //     const result = await searchforactor(q);
    //     setApiData(result);
    //   }
    // } catch (error) {
    //   setapidataerror(error);
    // }
  };

  const renderApiData = () => {
    if (apidataerror) {
      return <TextCenter>Error occured: {apidataerror.message}</TextCenter>;
    }

    if (apiData?.length == 0) {
      return <TextCenter>No Result Found</TextCenter>;
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

      <TextCenter>{renderApiData()}</TextCenter>
    </div>
  );
};

export default Home;
