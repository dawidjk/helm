import {Routes, Route} from 'react-router-dom';
import {SiteNav, SiteFooter} from './components/Site';
import Home from './pages/Home';
import LanePage from './pages/LanePage';
import {manufacturing, professionalServices, contractors} from './pages/lanes';

export default function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manufacturing" element={<LanePage lane={manufacturing} />} />
          <Route path="/professional-services" element={<LanePage lane={professionalServices} />} />
          <Route path="/contractors" element={<LanePage lane={contractors} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
