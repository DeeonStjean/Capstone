import './App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';


function App() {
  return (
    <>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
