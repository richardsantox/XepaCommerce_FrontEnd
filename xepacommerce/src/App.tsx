import Produtos from './Paginas/Produtos/Produtos';
import SobreNos from './Paginas/SobreNos/SobreNos';
import Contato from './Paginas/Contato/Contato';
import CadastroUsuario from './Paginas/CadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Paginas/Home/Home';
import Footer from './Components/Footer/Footer';
import Logar from './Paginas/Login/Login';
import Pedido from './Paginas/Pedido/Pedido';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/logar" element={<Logar />} />
          <Route path="/pedido" element={<Pedido />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
