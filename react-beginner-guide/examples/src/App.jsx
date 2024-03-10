import './App.css'
// import JsxComponent from './components/JsxComponent';
import NumbersComponent from './components/NumbersComponent';
import CssComponent from './components/CssComponent';
import Login from './components/Login';
import ClassComponent from './components/ClassComponent';
import LifeCyclesComponent from './components/LifeCyclesComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Button from './components/Button';
import ButtonJS from './components/ButtonJS';
import PropsProductComponent from './components/PropsProductComponent';

function App() {
  const products = [
    { id: 1, name: 'Computer', price: 5000 },
    { id: 2, name: 'Phone', price: 3000 },
    { id: 3, name: 'Tablet', price: 2000 },
  ];

  return (
    <div>
      <div>
                <PropsProductComponent products={products} />;
      </div>
    </div>
  );
}

export default App
