import type {ComponentType} from 'react';
import type {RouteRecord} from 'vite-react-ssg';
import Layout from './App';
import Home from './pages/Home';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';

const lazyPage = (load: () => Promise<{default: ComponentType}>) => async () => ({
  Component: (await load()).default,
});

const lazyManufacturing = async () => {
  const [{default: LanePage}, {manufacturing}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={manufacturing} />};
};

const lazyProfessionalServices = async () => {
  const [{default: LanePage}, {professionalServices}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={professionalServices} />};
};

const lazyContractors = async () => {
  const [{default: LanePage}, {contractors}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={contractors} />};
};

const lazyTerms = async () => {
  const [{default: LegalPage}, {terms}] = await Promise.all([
    import('./pages/LegalPage'),
    import('./pages/legal'),
  ]);
  return {Component: () => <LegalPage doc={terms} />};
};

const lazyPrivacy = async () => {
  const [{default: LegalPage}, {privacy}] = await Promise.all([
    import('./pages/LegalPage'),
    import('./pages/legal'),
  ]);
  return {Component: () => <LegalPage doc={privacy} />};
};

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <GlobalErrorBoundary />,
    entry: 'src/App.tsx',
    children: [
      {index: true, element: <Home />},
      {path: 'manufacturing/', lazy: lazyManufacturing},
      {path: 'professional-services/', lazy: lazyProfessionalServices},
      {path: 'contractors/', lazy: lazyContractors},
      {path: 'pricing/', lazy: lazyPage(() => import('./pages/Pricing'))},
      {
        path: ':slug/',
        lazy: lazyPage(() => import('./pages/ProductPage')),
        getStaticPaths: async () => (await import('./pages/products')).productList.map((p) => `${p.slug}/`),
      },
      {path: 'free-scan/', lazy: lazyPage(() => import('./pages/FreeScan'))},
      {path: 'quiz/', lazy: lazyPage(() => import('./pages/Quiz'))},
      {path: 'about/', lazy: lazyPage(() => import('./pages/About'))},
      {path: 'faq/', lazy: lazyPage(() => import('./pages/Faq'))},
      {path: 'trust/', lazy: lazyPage(() => import('./pages/Trust'))},
      {path: 'contact/', lazy: lazyPage(() => import('./pages/Contact'))},
      {path: 'resources/', lazy: lazyPage(() => import('./pages/Resources'))},
      {path: 'terms/', lazy: lazyTerms},
      {path: 'privacy/', lazy: lazyPrivacy},
      {
        path: 'resources/:slug/',
        lazy: lazyPage(() => import('./pages/ArticlePage')),
        getStaticPaths: async () => (await import('./pages/articles')).articles.map((a) => `resources/${a.slug}/`),
      },
    ],
  },
];
