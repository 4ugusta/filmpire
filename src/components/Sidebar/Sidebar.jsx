import React, { useEffect } from 'react';
import { Divider, List, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import redLogo from '../../logo/redLogo.png';
import blueLogo from '../../logo/blueLogo.png';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar({ setMobileOpen }) {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const theme2 = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    setMobileOpen(false);
  }, [genreIdOrCategoryName]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0' }}>
        <Link to="/">
          <Box sx={{ width: '240px', height: '80px' }}>
            <img src={theme2.palette.mode === 'light' ? blueLogo : redLogo} alt="Filmpire Logo" />
          </Box>
        </Link>
      </Box>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ color: (theme) => (theme.palette.text.primary) }}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                  <ListItemIcon>
                    <Box sx={{ filter: (theme) => (theme.palette.mode === 'dark' && 'invert(1)') }}>
                      <img src={genreIcons[label.toLowerCase()]} height={30} />
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            </Box>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>

        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : data.genres.map(({ name, id }) => (
          <Link key={name} to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ color: (theme) => (theme.palette.text.primary) }}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                  <ListItemIcon>
                    <Box sx={{ filter: (theme) => (theme.palette.mode === 'dark' && 'invert(1)') }}>
                      <img src={genreIcons[name.toLowerCase()]} height={30} />
                    </Box>
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            </Box>
          </Link>
        ))}
      </List>
    </>
  );
}

Sidebar.whyDidYouRender = true;
export default Sidebar;
