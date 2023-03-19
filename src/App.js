import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import SignupPage from './pages/SignUp/SignupPage';
import DetailsPage from './pages/Details/DetailsPage';
import ImageUpload from './pages/Upload/UploadPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer)
 
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
