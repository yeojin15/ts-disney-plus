import React, { useEffect, useState } from 'react';
import { requestApi } from '../../Util/api';
import { useLocation } from 'react-router-dom';
import { MovieProps } from '../../Util/interface';
import MovieItem from '../../Components/Movie/MovieItem';
import { SearchWrap } from './SearchPage.style';
import { useDebounce } from '../../Hooks/useDebounce';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<MovieProps[] | null>(
    null
  );
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm || '', 500);
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
    if (debouncedSearchTerm) requestSearchMovie(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  console.log(searchResults);
  return (
    <SearchWrap>
      {searchResults && searchResults.length !== 0 ? (
        searchResults.map((movie, idx) => (
          <MovieItem key={idx} movie={movie} />
        ))
      ) : (
        <p className='no-results'>
          "{searchTerm}" 에 맞는 결과가 없습니다.
        </p>
      )}
    </SearchWrap>
  );
};

export default SearchPage;
