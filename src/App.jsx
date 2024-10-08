import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/HomePage.jsx'
import LoginSignup from './components/LoginSignupBtns.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/preview/loginsignup' element={<LoginSignup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
