import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import SignIn from './Sign-In/SignIn';

import Dashboard from './Admin/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/signIn"
            element={<SignIn/>} // Pass the addToCart function as prop
          />
          <Route
            path="/admin"
            element={<Dashboard/>} // Pass the addToCart function as prop
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
