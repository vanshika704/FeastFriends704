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
import { Find1partner, Find2partner, Find5partner } from './pages/find1.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Page2" element={<MainPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/findpartners" element={<Findpartner />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/starters" element={<StartersPage />} />
        <Route path="/main-course" element={<MainCoursePage />} />
        <Route path="/desserts" element={<DessertsPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/find-partners" element={<Findpartner/>}/>
        <Route path="/find-one-partner" element={<Find1partner/>}/>
        <Route path="/2-4-partners" element={<Find2partner/>}/>
        <Route path="/more-than-4-partners" element={<Find5partner/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
