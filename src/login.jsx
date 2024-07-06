import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
      await setPersistence(auth, browserLocalPersistence);
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
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
      alert("User signed in with Google");
      navigate("/Page2");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="credentials">
      <input className='emailandpassword' type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className='emailandpassword' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
      
      <button className="custom-button email-button" onClick={SignIn}>Sign In with Email</button>
      <button className="custom-button google-button" onClick={SignInGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Home;
