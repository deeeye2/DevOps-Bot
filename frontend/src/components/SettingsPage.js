import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SettingsPage.css';

const SettingsPage = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch user data from the server when the component mounts
    axios.get('/api/user')
      .then(response => {
        setAddress(response.data.address || '');
        setTelephone(response.data.telephone || '');
        setHomeAddress(response.data.homeAddress || '');
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleProfilePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSaveSettings = async () => {
    const formData = new FormData();
    formData.append('profilePhoto', profilePhoto);
    formData.append('address', address);
    formData.append('telephone', telephone);
    formData.append('homeAddress', homeAddress);

    try {
      const response = await axios.post('/api/user/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Settings updated successfully!');
    } catch (error) {
      setMessage('Error updating settings. Please try again.');
    }
  };

  return (
    <div className="settings-page">
      <h2>User Settings</h2>
      <input type="file" onChange={handleProfilePhotoChange} />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Telephone" />
      <input type="text" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} placeholder="Home Address" />
      <button onClick={handleSaveSettings}>Save Settings</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SettingsPage;

