import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';

const Actorcard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
        {/* if gender is there then print in bracket  !! show Bollean */}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p> {deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default Actorcard;
