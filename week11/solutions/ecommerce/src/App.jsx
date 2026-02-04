import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './layouts/main';
import Home from './pages/Home';
import Cart from './pages/Cart';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/categories/:name' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
