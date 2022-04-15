import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function LeaderboardTable() {

  const data = useStaticQuery(graphql`
    query {
      allGoogleLeaderboardSheet(
        filter: {}, 
        sort: {fields: points, order: DESC},
        limit: 100
      ) {
        nodes {
          id
          name
          points
        }
      }
    }
  `)

  console.log(data.allGoogleLeaderboardSheet.nodes);
  let leaders = data.allGoogleLeaderboardSheet.nodes.map(
    (item) => {
      let leader = {
        "fullName": item.name,
        "totalPoints": item.points
      }
      return leader
    }
  );

  console.log(leaders);
  console.log(typeof(leaders));

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.allGoogleLeaderboardSheet.nodes.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}  
                </TableCell>
                <TableCell component="th">
                  {item.points}  
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      
      
    </TableContainer>
  )
}