import React, { useState } from 'react';
import axios from 'axios';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [picture, setPicture] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [massage, setMassage] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('date', date);
    formData.append('picture', selectedFile);
    formData.append('author', author);

    axios
      .post('http://localhost:4000/api/blog/blog-posts', formData)
      .then((response) => {
        // Handle successful response from the server
        console.log('Blog post successfully sent to the server');
        setMassage('Blog posted succefully')
        // Reset the form fields
        setTitle('');
        setContent('');
        setDate('');
        setPicture('');
        setAuthor('');
        setSelectedFile(null);
      })
      .catch((error) => {
        // Handle error in sending the blog post data
        console.error('Error sending blog post data:', error);
      });
  };

  return (
    <div>
      <h2>Post a Blog</h2>
      <h3 style={{color:'green'}}>{massage}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input
            type="file"
            id="picture"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostBlog;
