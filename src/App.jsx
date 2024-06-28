import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import MainPage from './pages/Page2';
import Menu from './components/Menu';
import Partners from './components/partners';
import Explore from './components/explore';
import MainCoursePage from './pages/Maincourse';
import StartersPage from './pages/starters';
import DessertsPage from './pages/Desserts';
import DrinksPage from './pages/Drinks';
import Home from './login';
import Findpartner from './pages/Findpartners';

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
        <Route path="/find-partners" element={<Findpartner/>}/>
      </Routes>
    </Router>
  );
}

export default App;
