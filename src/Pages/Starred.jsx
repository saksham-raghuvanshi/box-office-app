// import React from 'react'
import { useStarShows } from '../Lib/useStarShows';
const Starred = () => {
  const [starredshows] = useStarShows();
  return <div>Starred : {starredshows.length}</div>;
};

export default Starred;
