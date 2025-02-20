import axios from 'axios'
import './App.css'
import { useEffect } from 'react';

function App() {

  const fetchList = async () => {
    try {
      const response = await axios.get("https://apis.ccbp.in/list-creation/lists");
      if(response && response.data) {
        console.log(response.data)
      }
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className=''>
      <h1 className='text-3xl'>List Creation</h1>
      <button>Create new list</button>
    </div>
  )
}

export default App
