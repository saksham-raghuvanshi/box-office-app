import Actorcard from './Actorcard';

const Actorgrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <Actorcard
          Key={data.person.id}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : '/not-found.png'
          }
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </div>
  );
};

export default Actorgrid;
