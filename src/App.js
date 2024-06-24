import './App.css';
import Header from './containers/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<div>404 Not Found!</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
