// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getshowbyid } from '../Api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from './ShowMainData';
import Details from './Details';
import Season from './Season';
import Cast from './Cast';
import styled from 'styled-components';
import { TextCenter } from '../Common/TextCenter';

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
    return <TextCenter>Error : {showError.message}</TextCenter>;
  }

  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go to Home</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <InfoBlock>
          <h2>Details: </h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons: </h2>
          <Season seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast :</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is Loading</TextCenter>;
};

export default Show;

const BackHomeWrapper = styled.div`
  text-align: left;
  margin-bottom: 30px;

  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
