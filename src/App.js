import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import SignIn from './Sign-In/SignIn';
import UserDetails from './UserDetailsAdmin/UserDetails';
import Dashboard from './Admin/Dashboard';


function createData(id, date, name) {
  return { id, date, name };
}

// Create your data rows using the createData function
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
    'Tom Scholz'
    ),
    createData(
      '1b8c9052885c', 
      '16 Mar, 2019', 
      'Michael Jackson'
    ),
    createData(
      '1c982541b89c', 
      '15 Mar, 2019', 
      'Bruce Springsteen'
    ),
  // Add more rows here as needed
];
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/admin" element={<Dashboard />} />
          {/* Pass rows as a prop to the Orders component */}
          <Route path="/details/:id" element={<UserDetails rows={rows} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
