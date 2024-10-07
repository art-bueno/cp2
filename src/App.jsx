import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Sobre from './components/Sobre';
import Serviços from './components/Serviços';
import Portfolio from './components/Portfolio';
import Contatos from './components/Contatos';
// import HireMe from './components/HireMe';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#60072C] 
      via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36">
        
        
        <Header />

        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Servicos" element={<Serviços />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contatos" element={<Contatos />} />
            {/* <Route path="/me-contrate" element={<HireMe />} /> */}
          </Routes>
        </main>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
