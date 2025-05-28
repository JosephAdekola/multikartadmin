import React, { useState } from 'react';

const CLOUD_NAME = 'dhisrjyds'; // replace with your Cloudinary cloud name
const UPLOAD_PRESET = 'ecommerce'; // replace with your unsigned upload preset

function App() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return alert('Please select an image first.');
    setUploading(true);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setUrl(data.secure_url);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Upload Image to Cloudinary</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br /><br />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      <br /><br />
      {url && (
        <div>
          <h4>Uploaded Image:</h4>
          <img src={url} alt="Uploaded" style={{ width: '300px', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
