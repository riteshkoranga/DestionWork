import { Router, Route,Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard"
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Dashboard/Header';
function App() {
  return (
    <div className="App">
            <Header/>
      
            <Routes>
               
                <Route  path="/login" element={<Login/>} ></Route>
                <Route  path="/signup" element={<Signup/>} ></Route>
                <Route  path="/dashboard" element={<Dashboard/>} ></Route>
                <Route  path="/" element={<Dashboard/>} ></Route>{/* Default route to dashboard */}
               
            </Routes>
        
    </div>
  );
}

export default App;
