import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import LeaderboardTable from '/src/components/Leaderboard/LeaderboardTable';

export default function Leaderboard() {
  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        Leaderboard  
      </Typography>

      <Container maxWidth="xl">
        <LeaderboardTable />
      </Container>
    </div>
  );
}