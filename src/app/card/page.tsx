"use client"
import { useState } from 'react';
import Card from '@/components/Card';

export default function CardPage(){
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  const fetchProfileData = async (): Promise<void> => {
    try {
      const apiUrl = `https://api.github.com/users/${username}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log('Error fetching profile data:', error);
    }
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    setUsername(e.target.value);
  };

  function handleButtonClick (){
    fetchProfileData();
  };
  return(
    <div>
      <input
        placeholder='Enter your GitHub username...'
        type="text"
        value={username}
        onChange={handleInputChange}
      />

      <button
        type='button'
        onClick={handleButtonClick}
      >
        Gerar Card
      </button>

      {user && <Card user={user} />}
    </div>
  )
}