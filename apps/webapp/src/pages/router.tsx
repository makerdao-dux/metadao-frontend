import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from './Home';
import Delegates from './Delegates';
import Dsr from './Dsr';
import Config from './Config';
import Styles from './Styles';
import ErrorPage from './ErrorPage';
import Faqs from './Faqs';
import Oracles from './Oracles';

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/oracles',
    element: <Oracles />,
    errorElement: <ErrorPage />
  },
  {
    path: '/delegates',
    element: <Delegates />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dsr',
    element: <Dsr />,
    errorElement: <ErrorPage />
  },
  {
    path: '/config',
    element: <Config />,
    errorElement: <ErrorPage />
  },
  {
    path: '/styles',
    element: <Styles />,
    errorElement: <ErrorPage />
  },
  {
    path: '/faq',
    element: <Faqs />,
    errorElement: <ErrorPage />
  }
]);
