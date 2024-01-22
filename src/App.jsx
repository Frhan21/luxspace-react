import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import DetailsPage from './pages/DetailsPage';
import Carts from './pages/Carts';
import Congratulation from './pages/Congratulation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePages />} />
        <Route path='/categories/:idc' element={<DetailsPage />} />
        <Route path='/cart' element={<Carts />} />
        <Route path='/success' element={<Congratulation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
