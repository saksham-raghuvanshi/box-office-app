import styled from 'styled-components';

const Showcard = ({ id, name, image, summary, star, isStarred }) => {
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
        <a href={`show/${id}`} rel="noreferrer">
          Show More
        </a>
        <button type="buttton" onClick={() => star(id)}>
          {isStarred ? 'UnStar me' : 'Star'}
        </button>
      </div>
    </div>
  );
};

export default Showcard;
