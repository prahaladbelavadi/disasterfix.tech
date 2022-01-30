// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">

     <LandingPage/> 
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
