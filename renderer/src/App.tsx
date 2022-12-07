import { useState } from 'react'
import './App.css'
import {Layout} from '../modules/layout/components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Layout>
      <h1>MetaDAOOOOO</h1>
     </Layout>
    </div>
  )
}

export default App
