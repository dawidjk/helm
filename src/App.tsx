import {Routes, Route} from 'react-router-dom';
import {SiteNav, SiteFooter, RevealManager} from './components/Site';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LanePage from './pages/LanePage';
import {manufacturing, professionalServices, contractors} from './pages/lanes';

export default function App() {
  return (
    <>
      <SiteNav />
      <RevealManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manufacturing" element={<LanePage lane={manufacturing} />} />
          <Route path="/professional-services" element={<LanePage lane={professionalServices} />} />
          <Route path="/contractors" element={<LanePage lane={contractors} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
