//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Address from './Address'

function App() {
  //const [count, setCount] = useState(0)

  const theJSX = (  
   <div>
    <h1>Vite + React</h1>
    <h2>The best combination</h2>
    <h3>Couldn&apos;t be better!</h3>
    <Address street = "329 Eastwood Rd." city = "Woodmere" state = "Woodmere" zip = "11598"/>
   </div>   
  );
  return theJSX;
  
}

export default App
