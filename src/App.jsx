

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
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
        <Route path ="/menu" element={<Menu/>} />
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/explore" element={<Explore/>}/>
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
  const responseGoogle = (response) => {
    console.log(response); // Handle the response from Google authentication
    history.push('/Page2');
  };

  const onFailure = (error) => {
    console.log(error); // Handle error if authentication fails
  };

  return (
    <div className="credentials">
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />

      <GoogleLogin
        clientId="323828200975-iob96i4q01ggqv9gdr9fifl18gvps2re.apps.googleusercontent.com"
        buttonText="Sign In with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}



export default App;
