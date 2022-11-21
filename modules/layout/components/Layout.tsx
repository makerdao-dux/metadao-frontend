import React from "react";
import Head from "next/head";
import config from "../../config";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({
  children,
  metaDescription,
}: {
  children: React.ReactNode;
  metaDescription?: string;
}): React.ReactElement {
  return (
    <React.Fragment>
      <Head>
        <title>
          {config.name} | {metaDescription || config.description}
        </title>
        <meta
          name="description"
          content={metaDescription || config.description}
        />
        <link rel="icon" href={config.favicon} />
      </Head>

      <div className="body">
        <Header />

        <div className="main">{children}</div>
        <Footer />
      </div>
      <style jsx>{`
        .body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          max-width: 100%;
          margin: 0 auto;
        }

        .main {
          max-width: 1400px;
          padding: 30px;
          margin: 0 auto;
        }
      `}</style>
    </React.Fragment>
  );
}
