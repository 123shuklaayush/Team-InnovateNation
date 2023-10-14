// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home/Home';
import SignIn from './Sign-In/SignIn';
import UserDetails from './UserDetailsAdmin/UserDetails';
import Dashboard from './Admin/Dashboard';
import UploadDetails from './Admin/PdfDetails/UploadDetails';
import Client from './Client/Client';
import ClientDocuments from './Client/ClientDocuments';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/details/:id" element={<UserDetails />} />
            <Route path="/upload-details/:id" element={<UploadDetails />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client-documents" element={<ClientDocuments />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
