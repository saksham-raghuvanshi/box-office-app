// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getshowbyid } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from './ShowMainData';
import Details from './Details';
import Season from './Season';
import Cast from './Cast';

//Work Custom React Hook

// const useShowById = showid => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowerror] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getshowbyid(showid);
//         setShowData(data);
//       } catch (err) {
//         setShowerror(err);
//       }
//     }

//     fetchData();
//   }, [showid]);

//   return { showData, showError };
// };
const Show = () => {
  const { showid } = useParams();
  // to use custom hook react
  // const { showData, showError } = useShowById(showid);

  // const [showData, setShowData] = useState(null);
  // const [showError, setShowerror] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getshowbyid(showid);
  //       setShowData(data);
  //     } catch (err) {
  //       setShowerror(err);
  //     }
  //   }

  //   fetchData();
  // }, [showid]);

  //fetch data and error and data name give showdata and error name give showerror
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getshowbyid(showid),
  });

  if (showError) {
    return <div>Error : {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details: </h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <h2>Seasons: </h2>
        <Season seasons={showData._embedded.seasons} />

        <h2>Cast :</h2>
        <Cast cast={showData._embedded.cast} />
      </div>
    );
  }

  return <div>Data is Loading</div>;
};

export default Show;
