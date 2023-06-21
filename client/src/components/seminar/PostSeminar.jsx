import React, { useState } from 'react';
import axios from 'axios';

const PostSeminar = () => {
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [massage, setMassage] = useState('');


    const handleContentChange = (e) => {
        setContent(e.target.value);
    };


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        formData.append('picture', selectedFile, selectedFile.name); // Correct

        axios
            .post('http://localhost:4000/api/seminar', formData)
            .then((response) => {
                // Handle successful response from the server
                console.log('Serminar post successfully sent to the server');
                setMassage('Seminar posted succefully')
                // Reset the form fields
                setContent('');
             
                setSelectedFile(null);
            })
            .catch((error) => {
                // Handle error in sending the blog post data
                console.error('Error sending blog post data:', error);
            });
    };

    return (
        <div>
            <h2>Post a  SEMINAR </h2>
            <h3 style={{ color: 'green' }}>{massage}</h3>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="picture">Picture:</label>
                    <input
                        type="file"
                        id="picture"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostSeminar;
