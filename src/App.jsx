

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MainPage from './pages/Page2';
import Menu from './components/Menu';
import Partners from './components/partners';
import Explore from './components/explore';
import MainCoursePage from './pages/Maincourse';
import StartersPage from './pages/starters';
import DessertsPage from './pages/Desserts';
import DrinksPage from './pages/Drinks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Page2" element={<MainPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/starters" element={<StartersPage />} />
        <Route path="/main-course" element={<MainCoursePage />} />
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <><div className='login'>
      <Logo />
      <Credentials />
    </div></>
  );
}

function Logo() {
  return (
    <div className="logo"></div>
  );
}

function Credentials() {
  return (
    <div className="credentials">
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <Link to="/Page2">
      <button className="custom-button">Sign In with Email</button>
        <button className="custom-button">Sign In with Google</button>
      </Link>
    </div>
  );
}

export default App;