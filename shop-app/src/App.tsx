import { useEffect } from 'react';
import './App.css'
import { fetchData } from './services/api.services'

function App() {

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
      <h1>Hi I'm Miko</h1>
    </>
  )
}

export default App
