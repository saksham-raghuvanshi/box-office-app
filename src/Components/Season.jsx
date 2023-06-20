import styled from 'styled-components';

const Season = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>Total no Season: {seasons.length}</p>
      <p>
        Episode in Total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <SeasonList>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Seasons : {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <div>
              Aired : {season.premierDate} - {season.endDate}
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Season;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
