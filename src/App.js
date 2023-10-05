import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Country from './pages/Country';
import { ThemeProvider } from './Context/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './components/Test';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={`dark:bg-[#23272F]`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider >

  );
}

export default App;
