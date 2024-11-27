import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Country from './pages/Country';
import { ThemeProvider } from './Context/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen dark:bg-[#23272F]">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:name" element={<Country />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

