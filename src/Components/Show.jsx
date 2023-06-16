import { useParams } from 'react-router-dom';
const Show = () => {
  const { showid } = useParams();
  return <div>Show id = {showid}</div>;
};

export default Show;
