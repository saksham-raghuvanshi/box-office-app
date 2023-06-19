const Season = ({ seasons }) => {
  return (
    <div>
      <p>Total no Season: {seasons.length}</p>
      <p>
        Episode in Total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Seasons : {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <div>
              Aired : {season.premierDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;
