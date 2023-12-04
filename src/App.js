import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const BASE_URL = 'http://127.0.0.1:8000/student/'
  useEffect(()=>
    axios.get(BASE_URL)
    .then(res=>console.log(res))
    .catch(err=>console.log(err)),[]
  )

  // axios.post(BASE_URL,{
    
      
  //     "name": "afreen",
  //     "email": "afreen@gmail.com"
  // })
  // .then(res=>console.log(res))
  // .catch(err=>console.log(err)),[]
  // )

  return (
    <div>
      <p>check your logs</p>
    </div>
  )
}

export default App

