import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Layout } from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
);
