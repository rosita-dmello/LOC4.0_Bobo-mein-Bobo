import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getLeaderboard } from '../data/api';
import {useState, useEffect} from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8fd071",
    color: theme.palette.common.white,
    fontSize: 20,
    border: "2px solid green"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd), &:nth-of-type(even)': {
    border: "2px solid green"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const sampleLeaderBoard =  [
  {
      "_id": "6210cc6b159f598af23774f8",
      "name": "Rosita Dmello",
      "email": "esorthe7@gmail.com",
      "phone": 9920325295,
      "credits": 200,
      "createdAt": "2022-02-19T10:54:35.471Z"
  },
  {
      "_id": "6210bb1d548419269c981155",
      "name": "Rosita",
      "email": "ro@cloudfeel.33mail.com",
      "phone": 9876543211,
      "credits": 100,
      "createdAt": "2022-02-19T09:40:45.170Z"
  },
  {
      "_id": "6210bb06548419269c98114f",
      "name": "Yash",
      "email": "bb@cloudfeel.33mail.com",
      "phone": 9876543210,
      "credits": 50,
      "createdAt": "2022-02-19T09:40:22.653Z"
  },
  {
      "_id": "6210b0476f96093552fb6002",
      "name": "Kunal",
      "email": "kc@cloudfeel.33mail.com",
      "phone": 8104656734,
      "createdAt": "2022-02-19T08:54:31.344Z"
  },
  {
      "_id": "62108de330399041d1c13ef5",
      "name": "Vidhita",
      "email": "vd@ironhide.33mail.com",
      "phone": 9833319793,
      "createdAt": "2022-02-19T06:27:47.728Z"
  }
]
export default function Leaderboard() {
  const [rows, setRows] = useState(sampleLeaderBoard);

  const getLeaderboardFn = async () => {
    const response = await getLeaderboard();
    setRows(response.data);
  }

  useEffect(() => {
   getLeaderboardFn();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Username</StyledTableCell>
            <StyledTableCell >Credits</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell  component="th" scope="row">{index+1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.credits}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}