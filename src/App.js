import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  

  const toggleMode = () => {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert(' Dark mode has been Enabled','Success:')
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert(' Light mode has been Enabled','Success:')
    }
  }

  return (
  < >
    <Router>  
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>
            <Route exact path="/about" element={<About />}> </Route>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}> </Route>
        </Routes>
      </div>
    </Router>  
  </>
        
    
  
  );
}

export default App;