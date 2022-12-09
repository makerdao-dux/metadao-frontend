import React from 'react';
import config from '../../config';
import { Header } from './Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { Box } from 'theme-ui';
import Decoration from './Decoration';

export function Layout({
  children,
  metaDescription
}: {
  children: React.ReactNode;
  metaDescription?: string;
}): React.ReactElement {
  return (
    <div>
      <Helmet>
        <title>
          {config.name} | {metaDescription || config.description}
        </title>
        <meta name="description" content={metaDescription || config.description} />
        <link rel="icon" href={config.favicon} />
      </Helmet>

      <Box as="body" sx={{ variant: 'layout.body' }}>
        <Header />
        <Box as="main" sx={{ width: '100%', flex: '1 1 auto', variant: 'layout.main' }}>
          <Box sx={{ position: 'absolute' }}>
            <Decoration />
          </Box>
          {children}
        </Box>
        <Footer />
      </Box>
    </div>
  );
}
