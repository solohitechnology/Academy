// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetSeminar = () => {
//     const [seminar, setSeminar] = useState([]);

//     useEffect(() => {
//         fetchSeminarPosts();
//     }, []);

//     const fetchSeminarPosts = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/api/seminar');
//             setSeminar(response.data);
//         } catch (error) {
//             console.error('Error fetching seminar posts:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Join for Seminar</h2>
//             {seminar.map((post) => (
//                 <div className="seminar" key={post._id}>
//                     {post.picture && (
//                         <img src={`http://localhost:4000/${post.picture.path}`} alt="Seminar Post" />
//                     )}
//                     <p>{post.content}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };


// export default GetSeminar;



import React, { useState } from 'react';

const GetSeminar = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentImageIndex];

  const imageDescription = getImageDescription(currentImage);
  const registerLink = getRegisterLink(currentImage);

  return (
    <div className="picture-slider">
      <button onClick={previousImage}>Previous</button>
      <img src={currentImage.url} alt={currentImage.alt} />
      <div className="image-description">
        <p>{imageDescription}</p>
        <a href={registerLink}>Register</a>
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};


const getImageDescription = (image) => {
  return image.description || 'No description available';
};

const getRegisterLink = (image) => {
  return image.registerLink || '#';
};

export default GetSeminar; 
