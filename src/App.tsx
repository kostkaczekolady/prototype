import './App.scss';
import { DesktopMenu } from './components/DesktopMenu';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { TextBoxes } from './components/TextBoxes';
import { OnDesktopOnly } from './tools';

function App() {
  return (
    <>
      <Header/>
      <OnDesktopOnly>
        <DesktopMenu/>
      </OnDesktopOnly>
      <Product/>
      <TextBoxes/>
      <Footer/>
    </>
  );
}

export default App;
