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
import { AuthProvider, useAuth } from './context/AuthContext';
import Blog from './components/Blog/Blog';


function App() {

  // const [login, setLogin] = useState(false);
  // const [loggedUser, setLoggedUser] = useState()
  // const [token, setToken] = useState(null)
  const {isLogged, showModal} = useAuth();
 

  return (
            <div className="mx-auto flex flex-col justify-center">
              <Header/>
              {!isLogged && showModal && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"> <Loginsignup/> </div>}
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="category" element={<Category />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="category" element={<Category />} />
                <Route path="top-employers" element={<TopEmployers />} />
                <Route path="top-workers" element={<TopWorkers />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="job-lists" element={<JobLists />} />
                <Route path="blog" element={<Blog />} />
                <Route path="/:userId" element={<UserProfileLink />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </div>
  );
}

export default App;
