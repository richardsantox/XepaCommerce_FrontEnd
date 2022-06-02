import Produtos from './Paginas/Produtos/Produtos';
import SobreNos from './Paginas/SobreNos/SobreNos';
import Contato from './Paginas/Contato/Contato';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Paginas/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
