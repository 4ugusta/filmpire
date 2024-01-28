import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const CardTypography = styled(CardContent)(({ theme }) => ({
  width: '40%',
  color: '#fff',
  backgroundColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export function FeaturedMovie({ movie }) {
  if (!movie) return null;
  return (
    <Box
      sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', height: '490px', textDecoration: 'none' }}
      component={Link}
      to={`/movie/${movie.id}`}
    >
      <Card
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          sx={{
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.575)',
            backgroundBlendMode: 'darken',
          }}
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px" sx={{ zIndex: 1 }}>
          <CardTypography>
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardTypography>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;
