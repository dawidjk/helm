import type {RouteRecord} from 'vite-react-ssg';
import Layout from './App';
import Home from './pages/Home';
import LanePage from './pages/LanePage';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import ProductPage from './pages/ProductPage';
import FreeScan from './pages/FreeScan';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Faq from './pages/Faq';
import Trust from './pages/Trust';
import Resources from './pages/Resources';
import ArticlePage from './pages/ArticlePage';
import LegalPage from './pages/LegalPage';
import {manufacturing, professionalServices, contractors} from './pages/lanes';
import {productList} from './pages/products';
import {articles} from './pages/articles';
import {terms, privacy} from './pages/legal';

import GlobalErrorBoundary from './components/GlobalErrorBoundary';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <GlobalErrorBoundary />,
    entry: 'src/App.tsx',
    children: [
      {index: true, element: <Home />},
      {path: 'manufacturing/', element: <LanePage lane={manufacturing} />},
      {path: 'professional-services/', element: <LanePage lane={professionalServices} />},
      {path: 'contractors/', element: <LanePage lane={contractors} />},
      {path: 'pricing/', element: <Pricing />},
      {
        path: ':slug',
        element: <ProductPage />,
        getStaticPaths: () => productList.map((p) => p.slug),
      },
      {path: 'free-scan/', element: <FreeScan />},
      {path: 'quiz/', element: <Quiz />},
      {path: 'about/', element: <About />},
      {path: 'faq', element: <Faq />},
      {path: 'trust', element: <Trust />},
      {path: 'contact', element: <Contact />},
      {path: 'resources', element: <Resources />},
      {path: 'terms', element: <LegalPage doc={terms} />},
      {path: 'privacy', element: <LegalPage doc={privacy} />},
      {
        path: 'resources/:slug',
        element: <ArticlePage />,
        getStaticPaths: () => articles.map((a) => `resources/${a.slug}`),
      },
    ],
  },
];
