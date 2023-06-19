import { useEffect, useReducer } from 'react';

const uselocalstorage = (reducer, intialState, storagekey) => {
  const [state, dispatch] = useReducer(reducer, intialState, intial => {
    const localvalue = localStorage.getItem(storagekey);
    //if there  is value in local storage already then it convertr first from string to array fotr that we use JSON.parse
    return localvalue ? JSON.parse(localvalue) : intial;
  });

  //store changing state value starred and dispatch if state change and localkey change then run this
  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(state));
  }, [state, storagekey]);

  return [state, dispatch];
};

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
export const useStarShows = () => {
  return uselocalstorage(starredShowsReducer, [], 'Starredshows');
};
