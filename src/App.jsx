import { useState } from 'react'

import UpdateList from './assets/components/UpdateList/index.jsx'
import './App.css'
import ToDoList from './assets/components/ToDoList/index.jsx'

function App() {
  const [data, setData] = useState(0)

  return (
  <>

<UpdateList/>
</>
    
  )
}

export default App
