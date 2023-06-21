import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'dssjiciev'

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from Cloudinary
    axios
      .get(`https://api.cloudinary.com/v1_1/${url}/resources/video`, {
        params: {
          type: 'upload',
          prefix: 'videos/', // Optional: Set a specific folder prefix if needed
          max_results: 10, // Optional: Set the maximum number of videos to retrieve
          // Add more parameters as needed
        },
      })
      .then((response) => {
        const videoData = response.data.resources;
        // Process the retrieved video data as needed
        setVideos(videoData);
      })
      .catch((error) => {
        console.log('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Video Gallery</h2>
      {videos.map((video) => (
        <video key={video.public_id} controls>
          <source src={video.secure_url} type={video.resource_type} />
        </video>
      ))}
    </div>
  );
};

export default VideoGallery;
