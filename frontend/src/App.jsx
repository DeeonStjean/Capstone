import './App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
