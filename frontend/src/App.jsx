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

function App() {
  const [message, setMessage] = useState('Happy Coding 🚀');

  async function fetchFromApi() {
    const res = await fetch(import.meta.env.VITE_API_URL + '/api/user');
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <Router>
      <div className="mx-auto flex flex-col justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
