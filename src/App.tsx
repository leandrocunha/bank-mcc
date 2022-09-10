import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Applications } from './pages/Applications';
import { Configurations } from './pages/Configurations';
import { Home } from './pages/Home';
import { Users } from './pages/Users';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
