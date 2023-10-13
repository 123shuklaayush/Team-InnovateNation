import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  const { id } = useParams();
  const [pdfContent, setPdfContent] = useState(null);

  useEffect(() => {
    // Send a GET request to retrieve the PDF content based on the ID
    axios.get(`/download-pdf/${id}`, { responseType: 'arraybuffer' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfContent(url);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
        // Handle the error, e.g., show an error message to the user
      });
  }, [id]);

  return (
    <div>
      {pdfContent && (
        <Document file={pdfContent}>
          <Page pageNumber={1} />
        </Document>
      )}
      {!pdfContent && <p>Loading PDF...</p>}
    </div>
  );
};

export default PdfViewer;
