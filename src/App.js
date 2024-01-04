import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './componets/Navigation';
import LoginPage from './componets/LoginPage';
import Home from './componets/Home';
import WorkerLoginForm from './componets/WorkersLoginForm';

function App() {
  return (
    <div>
        {/* <BrowserRouter>
      <Navigation/> 
      <Routes>
        <Route path="/" element={<Home method='post'/>} />
          <Route path="/login" element={<LoginPage method='get' />} />
          <Route path="/workers" element={<WorkerLoginForm method='get'/>} />
        </Routes>
    </BrowserRouter> */}
      <WorkerLoginForm/>
    </div>
  );
}

export default App;
