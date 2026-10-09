import type {ComponentType} from 'react';
import {articleCatalog} from './pages/articleCatalog';
import {productList} from './pages/products';
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

const lazyLawFirms = async () => {
  const [{default: LanePage}, {lawFirms}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={lawFirms} />};
};

const lazyAccountingFirms = async () => {
  const [{default: LanePage}, {accountingFirms}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={accountingFirms} />};
};

const lazyMedicalPractices = async () => {
  const [{default: LanePage}, {medicalPractices}] = await Promise.all([
    import('./pages/LanePage'),
    import('./pages/lanes'),
  ]);
  return {Component: () => <LanePage lane={medicalPractices} />};
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
    path: '404/',
    element: <GlobalErrorBoundary missing />,
    entry: 'src/components/GlobalErrorBoundary.tsx',
  },
  {
    path: '*',
    element: <GlobalErrorBoundary missing />,
    entry: 'src/components/GlobalErrorBoundary.tsx',
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <GlobalErrorBoundary />,
    entry: 'src/App.tsx',
    children: [
      {index: true, element: <Home />},
      {path: 'manufacturing/', lazy: lazyManufacturing},
      {path: 'professional-services/', lazy: lazyProfessionalServices},
      {path: 'law-firms/', lazy: lazyLawFirms},
      {path: 'accounting-firms/', lazy: lazyAccountingFirms},
      {path: 'medical-practices/', lazy: lazyMedicalPractices},
      {path: 'contractors/', lazy: lazyContractors},
      {path: 'pricing/', lazy: lazyPage(() => import('./pages/Pricing'))},
      {path: 'secure-ai-adoption/', lazy: lazyPage(() => import('./pages/SecureAiAdoption'))},
      // Match only published products. A greedy :slug route would try to
      // render a product against the static 404 DOM at every unknown address.
      ...productList.map((product) => ({
        path: `${product.slug}/`,
        lazy: async () => {
          const {default: ProductPage} = await import('./pages/ProductPage');
          return {Component: () => <ProductPage slug={product.slug} />};
        },
      })),
      {path: 'free-scan/', lazy: lazyPage(() => import('./pages/FreeScan'))},
      {path: 'quiz/', lazy: lazyPage(() => import('./pages/Quiz'))},
      {path: 'about/', lazy: lazyPage(() => import('./pages/About'))},
      {path: 'faq/', lazy: lazyPage(() => import('./pages/Faq'))},
      {path: 'trust/', lazy: lazyPage(() => import('./pages/Trust'))},
      {path: 'contact/', lazy: lazyPage(() => import('./pages/Contact'))},
      {path: 'resources/', lazy: lazyPage(() => import('./pages/Resources'))},
      {path: 'terms/', lazy: lazyTerms},
      {path: 'privacy/', lazy: lazyPrivacy},
      ...articleCatalog.map(({slug}) => ({
        path: `resources/${slug}/`,
        lazy: lazyPage(() => import('./pages/ArticlePage')),
        loader: async () => {
          if (import.meta.env.SSR) {
            const [{articles}, {articleSupport}] = await Promise.all([
              import('./pages/articles'), import('./pages/articleSupport'),
            ]);
            return {article: articles.find((article) => article.slug === slug), support: articleSupport[slug]};
          }
          const response = await fetch(`/article-data/${slug}.json`);
          if (!response.ok) throw new Response('Resource unavailable', {status: response.status});
          return response.json();
        },
      })),
    ],
  },
];
