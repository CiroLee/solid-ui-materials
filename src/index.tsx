/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, hashIntegration } from '@solidjs/router';
import Layout from './layout';
import './styles/global.scss';

const root = document.getElementById('root') as HTMLElement;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

// if you don't want to use the hash-router mode, unset source field
render(
  () => (
    <Router source={hashIntegration()}>
      <Layout />
    </Router>
  ),
  root,
);
