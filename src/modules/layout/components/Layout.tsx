import React from 'react';
import config from '../../config';
import { Header } from './Header';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';

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

      <div className="body">
        <Header />

        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
