import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchMovie } from '../../features/currentGenreOrCategory';

const SearchContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.mode === 'light' && 'black',
  filter: theme.palette.mode === 'light' && 'invert(1)',
  [theme.breakpoints.down('sm')]: {
    marginTop: '-10px',
    marginBottom: '10px',
  },
}));

function Search() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  };

  if (location.pathname !== '/') return null;

  return (
    <SearchContainer>
      <SearchTextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
}

Search.whyDidYouRender = true;
export default Search;
