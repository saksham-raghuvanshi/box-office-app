import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getshowbyid } from '../Api/tvmaze';
const Show = () => {
  const { showid } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowerror] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getshowbyid(showid);
        setShowData(data);
      } catch (err) {
        setShowerror(err);
      }
    }

    fetchData();
  }, [showid]);

  if (showError) {
    return <div>Error : {showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show Data : {showData.name}</div>;
  }

  return <div>data is loading</div>;
};

export default Show;
