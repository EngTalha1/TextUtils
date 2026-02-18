//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'; 
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "white"); // Whether dark mode is enabled or not
  const setTheme = (color) => {
    setMode(color);
    document.body.style.backgroundColor = color;
    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} mode has been enabled`, "success"); // here we are showing an alert message when the theme is changed, and the type of alert is success which will show a green colored alert box, if we want to show error alert then type will be 'danger' which will show a red colored alert box, and so on, these types are based on bootstrap classes
    document.title = `TextUtils - ${color.charAt(0).toUpperCase() + color.slice(1)} Mode`; // here we are changing the title of the document when the theme is changed, and the title will be in the format of "TextUtils - Dark Mode" or "TextUtils - Light Mode" based on the theme selected by the user
    if (color === 'white') {
      document.body.style.color = 'black';
    } else {
      document.body.style.color = 'white';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {    //type is based on the type of alert we want to show, for example if we want to show success alert then type will be 'success' and if we want to show error alert then type will be 'danger' and so on, these types are based on bootstrap classes
    setAlert({message: message, type: type});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutTextutils = "About" mode={mode} setTheme={setTheme} />
    {/* container is bootstrap class it will bring following text box in the center */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        {/* Always use exact path so It can go to that exact route because some times we have two components with same name like users and second home/users so without exact it do partially and can do mismatching so exact works here */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
