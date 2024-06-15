import './App.css';
import Header from './components/Header';
import ProductList from './components/Products';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Cart from './components/Cart';

function App() {
  return (
    <div className="app flex flex-col h-screen font-poppin">
      <Provider store={store}>
        <div className="main-content flex flex-col lg:flex-row flex-2 gap-[8rem] md:gap-[1rem] p-5">
          <ProductList/>
          <Cart/>
        </div>
      </Provider>
      </div>
  );
}

export default App;