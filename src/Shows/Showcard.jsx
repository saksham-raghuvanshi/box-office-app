import styled from 'styled-components';
import { SearchImgWrapper, SearchCard } from '../Common/SearchCard';
import { StarIcon } from '../Common/StarIcon';
import { Link } from 'react-router-dom';
const Showcard = ({ id, name, image, summary, star, isStarred }) => {
  const summarystrriped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summarystrriped}</p>

      <ActionSection>
        <Link href={`show/${id}`} rel="noreferrer">
          Show More
        </Link>

        <StarBtn type="buttton" onClick={() => star(id)}>
          {/* {isStarred ? 'UnStar me' : 'Star'} */}

          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default Showcard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
