import { createContext, useEffect, useState } from 'react';
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

  const [login, setLogin] = useState(false);
  const [loggedUser, setLoggedUser] = useState()
  const [token, setToken] = useState(null)

  function updateLogin(newValue){
    setLogin(newValue)
  }

  useEffect(() => {
    const hasToken = localStorage.getItem('token')
    const hasUser = localStorage.getItem('user')
    if(hasToken && hasUser){
      setLogin(true)
    }

  }, [true])
  return (
        <Router> 
            <div className="mx-auto flex flex-col justify-center">
            <Header loggedUser={loggedUser} updateLogin={updateLogin}/>
            <Routes>
              <Route path="/" element={<HomePage login={login} updateLogin={updateLogin}/>} />
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
            <Footer />
            </div>
        </Router>
  );
}

export default App;
