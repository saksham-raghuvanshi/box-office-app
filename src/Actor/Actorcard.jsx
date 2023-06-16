const Actorcard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
        {/* if gender is there then print in bracket  !! show Bollean */}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p> {deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default Actorcard;
