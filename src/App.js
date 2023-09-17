import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ThemeProvider } from './Context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <div className='dark:bg-[#23272F]'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
