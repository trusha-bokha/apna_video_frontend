//import logo from './logo.svg';
import './App.css';
import  {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Authention from './pages/authentication';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <>
  <Router>

    <AuthProvider>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<Authention/>}/>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/history' element={<History />} />
        <Route path='/:url' element={<VideoMeetComponent/>}/>
      </Routes>
    </AuthProvider>
  </Router>

    </>
  );
}

export default App;
