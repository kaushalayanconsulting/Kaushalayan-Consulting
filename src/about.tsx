import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Layout } from './components/Layout.tsx';
import About from './pages/About.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <About />
    </Layout>
  </StrictMode>,
);
