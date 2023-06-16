import { Link } from 'react-router-dom';

const Showcard = ({ id, name, image, summary }) => {
  const summarystrriped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summarystrriped}</p>

      <div>
        <Link to={`show/${id}`}>Show More</Link>
        <button type="buttton">Starred</button>
      </div>
    </div>
  );
};

export default Showcard;
