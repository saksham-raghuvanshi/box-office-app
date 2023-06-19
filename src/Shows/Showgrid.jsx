// import { useReducer, useEffect } from 'react';
import Showcard from './Showcard';
import { useStarShows } from '../Lib/useStarShows';

//lets create custom hook to store starred show in localstorage

// const uselocalstorage = (reducer, intialState, storagekey) => {
//   const [state, dispatch] = useReducer(reducer, intialState, intial => {
//     const localvalue = localStorage.getItem(storagekey);
//     //if there  is value in local storage already then it convertr first from string to array fotr that we use JSON.parse
//     return localvalue ? JSON.parse(localvalue) : intial;
//   });

//   //store changing state value starred and dispatch if state change and localkey change then run this
//   useEffect(() => {
//     localStorage.setItem(storagekey, JSON.stringify(state));
//   }, [state, storagekey]);

//   return [state, dispatch];
// };

// const starredShowsReducer = (currentStarred, action) => {
//   switch (action.type) {
//     case 'STAR':
//       return currentStarred.concat(action.showid);

//     //The resulting array will contain all the elements from the original array that do not have the same value as action.showid
//     case 'UNSTAR':
//       return currentStarred.filter(showid => showid !== action.showid);

//     default:
//       return currentStarred;
//   }
// };

const Showgrid = ({ shows }) => {
  // const [starredShows, dispacthStarred] = useReducer(starredShowsReducer, []);
  const [starredShows, dispacthStarred] = useStarShows();

  // uselocalstorage (starredShowsReducer,[], 'StarredShows') //starredshows is key name

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
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default Showgrid;
