import * as React from 'react';
import OtherLink from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Link } from 'react-router-dom';
// Generate Order Data
function createData(id, startingdate, nextHearing, name, judge, lawyer) {
  return { id, startingdate, nextHearing, name, judge, lawyer };
}

const rows = [
  createData(
    '0a3b281a991',
    '16 Mar, 2019',
    '26 Sep 2023',
    'Elvis Presley',
    'ABC',
    'XYZ',
  ),
  createData(
    '00b12900ch8',
    '20 December, 2022',
    '28 October, 2023',
    'Paul McCartney',
    'ABC',
    'XYZ',
  ),
  createData(
    'b803cal91181',
    '16 January, 2020',
    '24 September 2023',
    'Tom Scholz',
    'ABC',
    'XYZ',
  ),
  createData(
    '1b8c9052885c',
    '11 May, 2019',
    '30 September, 2023',
    'Michael Jackson',
    'ABC',
    'XYZ',
  ),
  createData(
    '1c982541b89c',
    '15 Mar, 2019',
    '4 October, 2023',
    'Bruce Springsteen',
    'ABC',
    'XYZ',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const rowStyle = {
    cursor: 'pointer', // Make the cursor a pointer
    height: '3rem',    // Increase the row height
    transition: 'background-color 0.3s', // Add a smooth transition for background color
  };

  const cellStyle = {
    fontSize: '1rem',  // Optionally, you can adjust the font size of the cells
  };

  const handleRowHover = (event) => {
    event.currentTarget.style.backgroundColor = 'lightSkyBlue';
  };

  // Define a function to handle removing the hover effect
  const handleRowHoverExit = (event) => {
    event.currentTarget.style.backgroundColor = ''; // Revert to the default background color
  };

  return (
    <React.Fragment>
      <Title>Recent Cases</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={cellStyle}>ID_No</TableCell>
            <TableCell style={cellStyle}>Starting Date</TableCell>
            <TableCell style={cellStyle}>Next Hearing Date</TableCell>
            <TableCell style={cellStyle}>Client's Name</TableCell>
            <TableCell style={cellStyle}>Lawyer's Name</TableCell>
            <TableCell style={cellStyle}>Judge's Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              style={rowStyle}
              onMouseEnter={handleRowHover}
              onMouseLeave={handleRowHoverExit}
            >
              <TableCell style={cellStyle}>
                <Link
                  to={`/details/${row.id}?name=${row.name}&date=${row.startingdate}&nextDate=${row.nextHearing}&lawyer=${row.lawyer}&judge=${row.judge}`}
                >
                  {row.id}
                </Link>
                </TableCell>
              <TableCell style={cellStyle}>{row.startingdate}</TableCell>
              <TableCell style={cellStyle}>{row.nextHearing}</TableCell>
              <TableCell style={cellStyle}>{row.name}</TableCell>
              <TableCell style={cellStyle}>{row.judge}</TableCell>
              <TableCell style={cellStyle}>{row.lawyer}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <OtherLink color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Edit Cases
      </OtherLink>
    </React.Fragment>
  );
}
