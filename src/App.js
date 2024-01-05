import { useEffect, useState } from 'react';
import './App.css';
import Userlist from './Userlist';
import UserlistSmall from './UserlistSmall';

function App() {
const [UserData, setUserData] = useState([])
const [loaded, setloaded] = useState(false)
const [error, seterror] = useState(false)
const getData = async()=> {
const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
if(response.ok) {
  const data = await response.json()
setUserData(data)
setloaded(true)
}
else {
seterror(true)
}
}

useEffect(() => {
  getData()
},[])

  return (
    <div className="App">
    <nav className='sticky-top w-100 d-flex justify-content-center bg-primary text-white shadow'><h1 className='fs-5 my-2'>Users-List</h1></nav>
      {!error && (
        <>
        <Userlist UserData={UserData} loaded={loaded}/>
      <UserlistSmall UserData={UserData} loaded={loaded}/>
        </>
      )}
      {error && (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <span className="fs-2 text-secondary font-bold">
            Internal Server Error
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
