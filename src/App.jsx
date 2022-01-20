import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import AboutDigital from './components/AboutDigital';
import CenterDigital from './components/CenterDigital';
import Servicos from './components/Servicos';
import Empresas from './components/Empresas';

const  App = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutDigital />
      <CenterDigital />
      <Servicos />
      <Empresas />
    </>
  );
}

export default App ;
