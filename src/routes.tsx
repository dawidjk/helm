import type {RouteRecord} from 'vite-react-ssg';
import Layout from './App';
import Home from './pages/Home';
import LanePage from './pages/LanePage';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import ProductPage from './pages/ProductPage';
import FreeScan from './pages/FreeScan';
import About from './pages/About';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import ArticlePage from './pages/ArticlePage';
import {manufacturing, professionalServices, contractors} from './pages/lanes';
import {productList} from './pages/products';
import {articles} from './pages/articles';

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
      {path: 'about/', element: <About />},
      {path: 'faq', element: <Faq />},
      {path: 'contact', element: <Contact />},
      {path: 'resources', element: <Resources />},
      {
        path: 'resources/:slug',
        element: <ArticlePage />,
        getStaticPaths: () => articles.map((a) => `resources/${a.slug}`),
      },
    ],
  },
];
