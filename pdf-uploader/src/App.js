// frontend/src/App.js
import React from 'react';
import FileUpload from '../../frontend/src/FileUploader/FileUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF Uploader</h1>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
