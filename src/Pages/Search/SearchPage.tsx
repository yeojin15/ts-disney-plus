import React, { useEffect, useState } from 'react';
import { requestApi } from '../../Util/api';
import { useLocation } from 'react-router-dom';
import { MovieProps } from '../../Util/interface';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<MovieProps[] | null>(
    null
  );
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('q');
  console.log(searchTerm);

  /** 검색어 query string 결과 fetch */
  const requestSearchMovie = async (searchTerm: string | null) => {
    try {
      const res = await requestApi.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestSearchMovie(searchTerm);
  }, []);

  return (
    <div>
      {searchResults && searchResults.map((i) => <p>{i.title}</p>)}
    </div>
  );
};

export default SearchPage;
