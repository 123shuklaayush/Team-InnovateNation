import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';

const UploadedDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch the list of uploaded documents from your server
    axios.get('http://localhost:5000/get-uploaded-documents')
      .then((response) => {
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <Title>Uploaded Documents</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Document Name</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {documents.map((document) => (
            <TableRow key={document._id}>
              <TableCell>{document._id}</TableCell>
              <TableCell>{document.username}</TableCell>
              <TableCell>{document.originalname}</TableCell>
              <TableCell>
                <a
                  href={`http://localhost:5000/download-document/${document.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default UploadedDocuments;
