import { useEffect } from 'react';
import './App.css'
import { fetchData } from './services/api.services'
import Header from './components/header/header';

function App() {

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <Header />
    </>
  )
}

export default App
