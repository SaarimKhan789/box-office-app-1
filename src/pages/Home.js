import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results Found</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onChangeSearch = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />

      <div>
        <label htmlFor="show-search">
          Shows
          <input
            type="radio"
            id="show-search"
            value="shows"
            checked={isShowSearch}
            onChange={onChangeSearch}
          />
        </label>
        <label htmlFor="people-search ">
          Actors
          <input
            type="radio"
            id="people-search"
            value="people"
            checked={!isShowSearch}
            onChange={onChangeSearch}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>

      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
