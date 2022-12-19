import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface ProfileFetch{
  name: string;
  bio: string;
  followers: number;
}

function App() {
  const [data, setData] = useState<ProfileFetch>();

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(
        `https://api.github.com/users/elisacsz`
      );
      const data = await response.json();
      setData(data);
    }
    getProfile();
    
  });

  return (
    <div className="App">
      <h5>Nome:</h5>
      <p>{data?.name}</p>
      <h5>Bio:</h5>
      <p>{data?.bio}</p>
      <h5>Número de Seguidores:</h5>
      <p>{data?.followers}</p>      
    </div>
  );
}

export default App
