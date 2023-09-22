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
function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(
    '0a3b281a991',
    '16 Mar, 2019',
    'Elvis Presley',
  ),
  createData(
    '00b12900ch8',
    '16 Mar, 2019',
    'Paul McCartney',
  ),
  createData(
    'b803cal91181',
    '16 Mar, 2019',
    'Tom Scholz',
  ),
  createData(
    '1b8c9052885c',
    '16 Mar, 2019',
    'Michael Jackson',
  ),
  createData(
    '1c982541b89c',
    '15 Mar, 2019',
    'Bruce Springsteen',
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

  // Define a function to handle the hover effect
  const handleRowHover = (event) => {
    event.currentTarget.style.backgroundColor = 'lightSkyBlue';
  };

  // Define a function to handle removing the hover effect
  const handleRowHoverExit = (event) => {
    event.currentTarget.style.backgroundColor = ''; // Revert to the default background color
  };

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell style={cellStyle}>ID_No</TableCell>
            <TableCell style={cellStyle}>Date</TableCell>
            <TableCell style={cellStyle}>Name</TableCell>
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
              <Link to={`/details/${row.id}`}>{row.id}</Link>
                </TableCell>
              <TableCell style={cellStyle}>{row.date}</TableCell>
              <TableCell style={cellStyle}>{row.name}</TableCell>
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
