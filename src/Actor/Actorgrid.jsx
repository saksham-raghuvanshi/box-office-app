import Actorcard from './Actorcard';
import { FlexGrid } from '../Common/FlexGrid';
import NotFoundImg from '../images/not-found.png';

const Actorgrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <Actorcard
          Key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : NotFoundImg}
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
