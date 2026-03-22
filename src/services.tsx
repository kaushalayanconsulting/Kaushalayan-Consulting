import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Layout } from './components/Layout.tsx';
import Services from './pages/Services.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Services />
    </Layout>
  </StrictMode>,
);
