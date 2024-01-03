import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './componets/Navigation';
import LoginPage from './componets/LoginPage';
import Home from './componets/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
      <Navigation/> {/* Your navigation component */}
      <Routes>
        <Route path="/" element={<Home method='post'/>} />
        <Route path="/login" element={<LoginPage method='get'/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
