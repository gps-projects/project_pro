import React, { useState, useEffect } from 'react'
import Routing from './Component/Routing';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/lo_la").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      <Routing/>
      
    </div>
  )
}

export default App
