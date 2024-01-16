import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/system';
import Movies from './Movies/Movies';
import MovieInformation from './MovieInformation/MovieInformation';
import Actors from './Actors/Actors';
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
        }}
      >
        <CssBaseline />
        <NavBar />
        <Box sx={{ flexGrow: '1', padding: '2em' }}>
          <main>
            <Box sx={{ height: '70px' }} />
            <Routes>
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/" element={<Movies />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </main>
        </Box>
      </Box>
    </div>
  );
}

export default App;
