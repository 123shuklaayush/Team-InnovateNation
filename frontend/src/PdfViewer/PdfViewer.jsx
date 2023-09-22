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
    axios.get(`/pdf/${id}`, { responseType: 'arraybuffer' })
      .then((response) => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        setPdfContent(`data:application/pdf;base64,${base64}`);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  }, [id]);

  return (
    <div>
      {pdfContent && (
        <Document file={pdfContent}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
