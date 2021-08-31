import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { TextBoxes } from './components/TextBoxes';

function App() {
  return (
    <>
      <Header/>
      <Product/>
      <TextBoxes/>
      <Footer/>
    </>
  );
}

export default App;
