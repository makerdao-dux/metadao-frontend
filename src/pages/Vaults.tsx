import React, { useState } from 'react';
import { Layout } from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';

function Vaults(): React.ReactElement {
  return (
    <div className="App">
      <Layout>
        <main>
          <div className="page-bg">
            <Decoration />
          </div>

          <div className="page-content">
            <div className="title">
              <h1>Vaults</h1>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Vaults;
