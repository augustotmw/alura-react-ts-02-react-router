import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/Home';
import Cardapio from './modules/Cardapio';
import Menu from './shared/components/Menu';
import Structure from './shared/components/Structure';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Structure />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
