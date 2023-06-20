import styled from 'styled-components';
import { useState } from 'react';
import CustomRadio from '../Pages/CustomRadio';

const Searchform = ({ onSearch }) => {
  const [searchoption, setSearchoption] = useState('shows');
  const [search, setSearch] = useState('');

  console.log(search);
  const onSearchInputChange = ev => {
    //target means input value measns that enter check from dev console
    setSearch(ev.target.value);
    console.log(setSearch);
  };

  const OnRadiochange = ev => {
    setSearchoption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: search,
      searchoption,
    };

    onSearch(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          value={search}
          onChange={onSearchInputChange}
          placeholder="Search for something"
        />
        <RadiosWrapper>
          <CustomRadio
            label="shows"
            name="search-option"
            value="shows"
            checked={searchoption === 'shows'}
            onChange={OnRadiochange}
          />

          <CustomRadio
            label="actors"
            name="search-option"
            value="actors"
            checked={searchoption === 'actors'}
            onChange={OnRadiochange}
          />
        </RadiosWrapper>
        {/* <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchoption === 'shows'}
            onChange={OnRadiochange}
          />
        </label> */}

        {/* <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchoption === 'actors'}
            onChange={OnRadiochange}
          />
        </label> */}
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default Searchform;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    color: #8d8d8d;
    font-weight: 300;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
