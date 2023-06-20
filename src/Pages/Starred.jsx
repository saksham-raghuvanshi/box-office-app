// import React from 'react'
import { getshowbyids } from '../Api/tvmaze';
import { TextCenter } from '../Common/TextCenter';
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
    return <TextCenter>No shows were Starred</TextCenter>;
  }

  if (starredshow?.length > 0) {
    return <Showgrid shows={starredshow} />;
  }

  if (starredshowerror) {
    return <TextCenter>Error occur : {starredshowerror.message}</TextCenter>;
  }
  return <TextCenter>shows are still loading</TextCenter>;
};

export default Starred;
