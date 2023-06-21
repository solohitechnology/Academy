import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
  cloudName: 'YOUR_CLOUD_NAME',
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
};

export const CloudinaryContextProvider = ({ children }) => (
  <CloudinaryContext {...cloudinaryConfig}>{children}</CloudinaryContext>
);
