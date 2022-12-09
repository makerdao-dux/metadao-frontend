import React from 'react';
import { Layout } from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';

function Config(): React.ReactElement {
  return (
    <div className="App">
      <Layout>
        <main>
          <div className="page-bg">
            <Decoration />
          </div>

          <div className="page-content">
            <div className="title">
              <h1>config</h1>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Config;
