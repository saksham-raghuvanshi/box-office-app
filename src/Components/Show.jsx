// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getshowbyid } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';

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
    return <div>Got Show Data : {showData.name}</div>;
  }

  return <div>data is loading</div>;
};

export default Show;
