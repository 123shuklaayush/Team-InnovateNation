import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ClientDocuments from './ClientDocuments';

// Define a styled component for the list
const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: center; /* Center the text */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a box shadow */
  padding: 20px; /* Add some padding for spacing */
`;

// Define a styled component for list items
const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

const ClientAccess = () => {
  return (
    <StyledList>
      <StyledListItem>Name: John</StyledListItem>
      <StyledListItem>Starting Date: 15 September 2019</StyledListItem>
      <StyledListItem>Next Hearing Date: 23 September 2023</StyledListItem>
      <StyledListItem>Lawyer: ABC</StyledListItem>
      <StyledListItem>Judge: XYZ</StyledListItem>
      {/* Use Link to navigate to the ClientDocuments page */}
      <Link to="/client-documents">
        <button type="button" className="btn btn-primary">View Uploaded Documents</button>
      </Link>
    </StyledList>
  );
};

export default ClientAccess;
