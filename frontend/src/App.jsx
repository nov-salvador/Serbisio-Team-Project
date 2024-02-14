import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import Category from './components/HomePage/Category';
import Jobs from './components/JobListing/Jobs';
import TopEmployers from './components/HomePage/TopEmployers';
import TopWorkers from './components/HomePage/TopWorkers';
import UserProfileLink from './components/UserProfile/UserProfileLink';
import JobLists from './components/JobListing/JobLists';
import Loginsignup from './components/LoginSignup/LoginSignup';

function App() {
  const [message, setMessage] = useState('Happy Coding 🚀');

  const [login, setLogin] = useState(false);
  const [loggedUser, setLoggedUser] = useState()

  function updateLogin(newValue){
    setLogin(newValue);
  };

  function updateUser(newValue){
    setLoggedUser(newValue)
  };
  

  return (
    <Router> 
        <div className="mx-auto flex flex-col justify-center">
        {login && <Header user={loggedUser}/>}
        <Routes>
          <Route path="/" element={<Loginsignup updateLogin={updateLogin} updateUser={updateUser}/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="category" element={<Category />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="category" element={<Category />} />
          <Route path="top-employers" element={<TopEmployers />} />
          <Route path="top-workers" element={<TopWorkers />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="job-lists" element={<JobLists />} />
          <Route path="/:userId" element={<UserProfileLink />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {login &&<Footer />}
        </div>
    </Router>
  );
}

export default App;
