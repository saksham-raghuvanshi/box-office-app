// import React from 'react'
import { getshowbyids } from '../Api/tvmaze';
import { useStarShows } from '../Lib/useStarShows';
import Showgrid from '../Shows/Showgrid';
import { useQuery } from '@tanstack/react-query';
const Starred = () => {
  const [starredshowsid] = useStarShows();

  const { data: starredshow, error: starredshowerror } = useQuery({
    queryKey: ['starred', starredshowsid],

    //under show
    queryFn: () =>
      getshowbyids(starredshowsid).then(result =>
        result.map(show => ({ show }))
      ),

    //it refetch and refresh every time so we need to make it false
    refetchOnWindowFocus: false,
  });

  //starredshow && starredshow.length==0
  if (starredshow?.length === 0) {
    return <div>No shows were Starred</div>;
  }

  if (starredshow?.length > 0) {
    return <Showgrid shows={starredshow} />;
  }

  if (starredshowerror) {
    return <div>Error occur : {starredshowerror.message}</div>;
  }
  return <div>shows are still loading</div>;
};

export default Starred;
