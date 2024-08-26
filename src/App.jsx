import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Import global CSS for background

function App() {
  return (
    <Provider store={store}>
      <div className="appContainer">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Shopping Cart</h1>
        <div className="contentContainer">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
