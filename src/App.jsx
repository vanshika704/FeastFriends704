import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import MainPage from './pages/Page2';
import Menu from './components/Menu';
import Partners from './components/partners';
import Explore from './components/explore';
import MainCoursePage from './pages/Maincourse';
import StartersPage from './pages/starters';
import DessertsPage from './pages/Desserts';
import DrinksPage from './pages/Drinks';
import { useState } from 'react';

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
    <div className='login'>
      <Logo />
      <Credentials />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo"></div>
  );
}

function Credentials() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed in with email and password");
      navigate("/Page2");
    } catch (error) {
      alert(error.message);
    }
  };

  const SignInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("User signed in with Google");
      navigate("/Page2");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="credentials">
      <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
      
      <button className="custom-button" onClick={SignIn}>Sign In with Email</button><br/>
      <button className="custom-button" onClick={SignInGoogle}>Sign In with Google</button>
    </div>
  );
}

export default App;
