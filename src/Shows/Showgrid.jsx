import Showcard from './Showcard';

const Showgrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <Showcard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '../images/not-found.png'
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default Showgrid;
