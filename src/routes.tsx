import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/Home';
import Cardapio from './modules/Cardapio';
import Menu from './shared/components/Menu';
import Structure from './shared/components/Structure';
import About from './modules/About';
import Footer from './shared/components/Footer';
import NotFound from './modules/Error/NotFound';
import Pratos from './modules/Pratos';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Structure />}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<About />} />
          </Route>
          <Route path='prato/:id/*' element={<Pratos />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
