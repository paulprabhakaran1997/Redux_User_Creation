import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route   } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
