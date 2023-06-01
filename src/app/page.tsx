"use client"
import { useState } from 'react';
import Instructions from '@/components/Instructions';
import Card from '@/components/Card';

export default function Home() {
    
  const [url, setUrl] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  const fetchProfileData = async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log('Error fetching profile data:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };

  const handleButtonClick = (): void => {
    fetchProfileData();
  };
    return (
      <main className='searchProfile'>
        <h1>Meu Card do GitHub</h1>
  
        <input 
        placeholder='digite seu url do github api...'
        type="text" 
        value={url} 
        onChange={handleInputChange} />
  
        <button 
        type='button'
        onClick={handleButtonClick}>Gerar Card</button>
        
        <Instructions/>
        
        {user && <Card user={user} />}
      </main>
    );
}
