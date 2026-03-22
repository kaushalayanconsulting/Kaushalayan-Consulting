import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Layout } from './components/Layout.tsx';
import Pricing from './pages/Pricing.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Pricing />
    </Layout>
  </StrictMode>,
);
