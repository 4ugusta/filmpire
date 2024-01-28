import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/system';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MovieInformation';
import Actors from './Actors/Actors';
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';
import useAlan from './Alan';

function App() {
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <NavBar />
      <main style={{ flexGrow: '1', padding: '2em', width: '100%' }}>
        <Box sx={{ height: '70px' }} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          {['/', '/approved'].map((path) => <Route path={path} element={<Movies />} />)}
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

App.whyDidYouRender = true;
export default App;
