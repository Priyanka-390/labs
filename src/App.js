import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Mynav from './components/Mynav';
import Herosec from './components/Herosec';
import Secslide from './components/Secslide';
import Doerssec from './components/Doerssec';
import Levelbg from './components/Levelbg';
import Domainsec from './components/Domainsec';
import Richsec from './components/Richsec';
import Behindsec from './components/Behindsec';
import Whatsec from './components/Whatsec';
import Roadmap from './components/Roadmap';
import Updatedsec from './components/Updatedsec';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
   const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div>
       {data ? (
        <div>{ <Preloader /> }</div>
      ) : (
      <div className="App bg-black">
        <div id='home' className="herobg-img min-vh-100 pb-5 d-flex flex-column">
          <Mynav />
          <Herosec/>
        </div>
        <Secslide />
        <Doerssec />
        <Levelbg />
        <Domainsec />
        <Richsec />
        <Behindsec />
        <Whatsec />
        <Roadmap />
        <Updatedsec />
        <Footer />
        <Backtotop/>
          </div>
           )}
    </div>
  );
}

export default App;
