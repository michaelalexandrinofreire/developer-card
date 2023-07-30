"use client"
import { useState } from 'react';
import Instructions from '@/components/Instructions';
import Card from '@/components/Card';

export default function Home() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleButtonClick = (): void => {
    fetchProfileData();
  };

  return (
    <main className='searchProfile'>
      <h1>Create Your ProfileHub</h1>

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
        Generate Card
      </button>

      <Instructions />

      {user && <Card user={user} />}
    </main>
  );
}

