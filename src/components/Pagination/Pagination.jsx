import React from 'react';
import { Typography, Button, styled } from '@mui/material';

const PageNumber = styled(Typography)(({ theme }) => ({
  margin: '0 20px !important',
  color: theme.palette.text.primary,
}));

function Pagination({ currentPage, setPage, totalPages }) {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={handlePrev} sx={{ margin: '30px 2px' }} variant="contained" color="primary" type="button">Prev</Button>
      <PageNumber variant="h4">{currentPage}</PageNumber>
      <Button onClick={handleNext} sx={{ margin: '30px 2px' }} variant="contained" color="primary" type="button">Next</Button>
    </div>
  );
}

export default Pagination;
