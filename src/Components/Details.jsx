import styled from 'styled-components';
const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>Status : {status}</p>

      <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
      </p>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
