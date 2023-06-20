import Actorcard from './Actorcard';
import { FlexGrid } from '../Common/FlexGrid';

const Actorgrid = ({ actors }) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default Actorgrid;
