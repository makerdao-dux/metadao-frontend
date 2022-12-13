import React, { useContext } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { Box } from 'theme-ui';
import Decoration from './Decoration';
import { ConfigContext } from '../../config/context/ConfigContext';

export function Layout({
  children,
  metaDescription
}: {
  children: React.ReactNode;
  metaDescription?: string;
}): React.ReactElement {
  const { siteConfig } = useContext(ConfigContext);
  return (
    <div>
      <Helmet>
        <title>
          {siteConfig.name} | {metaDescription || siteConfig.description}
        </title>
        <meta name="description" content={metaDescription || siteConfig.description} />
        <link rel="icon" href={siteConfig.favicon} />
      </Helmet>

      <Box as="body" sx={{ variant: 'layout.body' }}>
        <Header />
        <Box as="main" sx={{ width: '100%', flex: '1 1 auto', variant: 'layout.main' }}>
          {children}
          <Box sx={{ position: 'absolute' }}>
            <Decoration />
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}
