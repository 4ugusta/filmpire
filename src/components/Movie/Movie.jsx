import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginBottom: '0',
  textAlign: 'center',
}));
const MyLink = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
  },
}));
const MovieImg = styled('img')(() => ({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': { transform: 'scale(1.05)' },
}));

function Movie({ movie, i }) {
  return (
    <Grid sx={{ padding: '10px' }} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <MyLink to={`/movie/${movie.id}`}>
          <MovieImg
            alt={movie.title}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'htps://www.fillmurray.com/200/300'}
          />
          <TitleTypography variant="h5">{movie.title}</TitleTypography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </MyLink>
      </Grow>
    </Grid>
  );
}

Movie.whyDidYouRender = true;
export default Movie;
