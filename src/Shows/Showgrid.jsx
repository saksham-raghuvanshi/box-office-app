import { useReducer } from 'react';
import Showcard from './Showcard';

const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showid);

    //The resulting array will contain all the elements from the original array that do not have the same value as action.showid
    case 'UNSTAR':
      return currentStarred.filter(showid => showid !== action.showid);

    default:
      return currentStarred;
  }
};

const Showgrid = ({ shows }) => {
  const [starredShows, dispacthStarred] = useReducer(starredShowsReducer, []);

  const onStarClick = showid => {
    //Check whether the value of showid exists within the starredShows array or Not
    const isStarred = starredShows.includes(showid);

    if (isStarred) {
      dispacthStarred({ type: 'UNSTAR', showid });
    } else {
      dispacthStarred({ type: 'STAR', showid });
    }
  };

  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/not-found.png'}
          summary={data.show.summary}
          star={onStarClick}
        />
      ))}
    </div>
  );
};

export default Showgrid;
