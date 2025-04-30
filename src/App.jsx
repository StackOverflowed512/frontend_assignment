import './App.css'
import WelcomePage from './Componets/WelcomePage/WelcomePage';
import SignUpScreen from './Componets/SignUpScreen/SignUpScreen';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './Componets/LoginScreen/LoginScreen';
import Profile from './Componets/Profile/Profile';
import ProtectedRoute from './Componets/ProtectedRoute'; // <-- add this

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>

      {/* div for looking a phone in desktop site */}
      <div className="desktopSize">
        <div className="mobileSize">

          {/* all pages inside phone wrapper */}
          <Routes>
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route 
              path="/account-setting" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
