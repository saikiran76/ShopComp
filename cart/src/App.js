import './App.css';
import Header from './components/Header';
import ProductList from './components/Products';

function App() {
  return (
    <div className="app flex flex-col h-screen">
        <Header />
        <div className="main-content flex flex-1 p-5">
          <ProductList/>
        </div>
      </div>
  );
}

export default App;
