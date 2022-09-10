import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Sidebar />
        <section className="content">
          {/* content here */}
        </section>
      </section>
    </div>
  )
}

export default App
