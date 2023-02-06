import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
