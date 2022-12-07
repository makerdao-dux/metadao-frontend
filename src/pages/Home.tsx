import React, { useState } from 'react'
import {Layout} from '../modules/layout/components/Layout';
import Decoration from '../modules/layout/components/Decoration';

function Home(): React.ReactElement {

  return (
    <div className="App">
      <Layout>
      <main>
        <div className="page-bg">
          <Decoration />
        </div>

        <div className="page-content">
          <div className="title">
            <h1>MetaDAO frontend</h1>
            <div className="subtitle">Your homepage to access core Maker features</div>
          </div>

        </div>
      </main>
      </Layout>
    </div>
  )
}

export default Home
