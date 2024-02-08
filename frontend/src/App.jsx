import { useState } from 'react';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState('Happy Coding 🚀');

  async function fetchFromApi() {
    const res = await fetch(import.meta.env.VITE_API_URL + '/api/user'); // Feel free to remove this line and the next one
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div className="mx-auto flex flex-col justify-center">
        {/* <h1>{message}</h1>
        <button onClick={fetchFromApi}>Get Message from API</button> */}
        <Header />
        <HomePage />
        <Footer />
      </div>
  );
}

export default App;
