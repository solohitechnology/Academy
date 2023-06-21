import React, { useState } from 'react';
import axios from 'axios';
import './getbook.css'

function UploadFiles() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [massage, setMassage] = useState('')
  const [pdf, setPdf] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePictureChange = (e) => setPicture(e.target.files[0]);
  const handlePdfChange = (e) => setPdf(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('picture', picture);
    formData.append('pdf', pdf);

    try {
      const response = await axios.post('http://localhost:4000/api/books/upload-book', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response.data);
      setMassage(response.data.massage)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mother_form'>
      <h1>Upload Files</h1>
      <form onSubmit={handleSubmit}>
        <h3 style={{color:'green'}}>{massage}</h3>
          <label htmlFor="name">Name:</label>
        <div>
          <input type="text" id="name" maxLength='21' value={name} onChange={handleNameChange} />
        </div>
          <label htmlFor="price">Price:</label>
        <div>
          <input type="number" id="price" value={price} onChange={handlePriceChange} />
        </div>
          <label htmlFor="description">Description:</label>
        <div>
          <textarea id="description"  value={description} onChange={handleDescriptionChange} />
        </div>
          <label htmlFor="picture">Picture:</label>
        <div>
          <input type="file" id="picture" onChange={handlePictureChange} />
        </div>
          <label htmlFor="pdf">PDF:</label>
        <div>
          <input type="file" id="pdf" onChange={handlePdfChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadFiles;
