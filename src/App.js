import './App.css';
import { useState, useEffect ,useContext} from 'react';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
// import About from './components/About';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import FromContext from "./context/FormContext"
import FormContext from './context/FormContext';
import Profile from './components/pages/Profile';
import About from './components/pages/About';


function App() {
  const [username , setUsername] = useState("")
  const [showSignUp,setShowSignUp] = useState(true)
  const [showInfo,setShowInfo] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("username")){
      setUsername(localStorage.getItem("username"))
      setShowInfo(true)
      setShowSignUp(false)
    }
  }, [username])

  useEffect(() => {
    localStorage.setItem("username",username)
  }, [username])


  return (
    <FormContext.Provider value={{
      setUsername,
      username,
      showInfo,
      setShowInfo,
      setShowSignUp,
      showSignUp
    }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about-us" element={<About />} />
          <Route path={`/${username}`} element={<Profile />} />
        </Routes>
      </Router>
    </FormContext.Provider>
  );
}

export default App;
