

import React, { useState } from 'react';
import axios from 'axios';

const UploadVideo = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    // Prepare the upload URL
    const url = 'dssjiciev'
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${url}/auto/upload`;

    // Prepare the form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'jslpxs42');

    try {
      // Send the HTTP request using Axios
      const response = await axios.post(cloudinaryUrl, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      // Handle the response
      console.log('Uploaded video details:', response.data);
      alert('success upload')
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div style={{width:'auto', textAlign:"center", display:'flex', flexWrap:'wrap', flexDirection: 'column'}}>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {uploadProgress > 0 && (
        <div>
          <progress value={uploadProgress} max="100" />
          <span>{`${uploadProgress}%`}</span>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
