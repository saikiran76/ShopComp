import './App.css';
import ProductList from './components/Products';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Cart from './components/Cart';
import { BlackBar } from './components/BlackBar';

function App() {
  return (
    <div className="app flex flex-col font-poppin">
      <Provider store={store}>
        <div className="main-content flex flex-col lg:flex-row flex-2 gap-[3rem] md:gap-[1rem] p-5 h-[150%]">
          <ProductList/>
          <Cart/>
        </div>
      </Provider>
      <BlackBar/>
      </div>
  );
}

export default App;
