import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import PrivacyPolicy from './privacyPolicy';
import EmailVerified from './emailVerified';
import ChangePassword from './changePassword';
import PasswordUpdated from './passwordUpdated';

function App() {
  return (
    <Router>
      <div className="appbar">
        <h1>Jerusalem Golds</h1>
        <nav>
          <Link style={{ fontWeight: 'bold' }} to="/">Home</Link>
          <Link style={{ fontWeight: 'bold' }} to="/Privacy-Policy">Privacy Policy</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Email-Verified" element={<EmailVerified />} />
        <Route path="/Change-Password" element={<ChangePassword />} />
        <Route path="/Password-Updated" element={<PasswordUpdated />} />
      </Routes>
    </Router>
  );
}

export default App;
