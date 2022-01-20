import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import AboutDigital from './components/AboutDigital';
import CenterDigital from './components/CenterDigital';
import Servicos from './components/Servicos';
import Empresas from './components/Empresas';
import SendEmail from './components/SendEmail';

const  App = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutDigital />
      <CenterDigital />
      <Servicos />
      <Empresas />
      <SendEmail />
    </>
  );
}

export default App ;
