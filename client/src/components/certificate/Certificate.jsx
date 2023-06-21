import React, { useState } from 'react';
import axios from 'axios';

const CertificateGenerator = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:4000/api/cert/generate-certificate', {
                name,
                course,
            }, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

          
            if (!downloaded) {
                const link = document.createElement('a');
                link.href = url;
                link.download = 'certificate.pdf';
                link.click();

             
                URL.revokeObjectURL(url);

                setDownloaded(true);
            }

            setIsLoading(false);
        } catch (error) {
            setError(" could not generate certificate check your network and try again.")
            console.error('Certificate generation error:', error);
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2 style={{ fontSize: '35px', fontFamily: 'cursive' }}>Get Instant Certificate Of Participation</h2>
            {downloaded ? (
                <>
                    <h3 style={{margin:'20px', color:'green'}}>Congratulations! {name}</h3>
                    <p>You have made the right choice to participate in this course.</p>
                    <img style={{borderRadius:'20% 200% 300%', margin:'20px'}} src='cert.jpg' />
                </>

            ) : (
                <form style={{border:'none', display:"flex", flexWrap:"wrap"}} onSubmit={handleSubmit}>
                    <p>{error}</p>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <br />
                    <label htmlFor="course">Course:</label>
                    <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} required />
                    <br />
                    {isLoading ? (
                        <p>Generating... please wait</p>
                    ) : (
                        <button style={{color:'gold',}} type="submit">Generate Certificate</button>
                    )}
                </form>
            )}
        </div>
    );
};

export default CertificateGenerator;
