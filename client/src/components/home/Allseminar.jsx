import GetSeminar from '../seminar/GetSeminar';


 export  const Allseminar = async () => {
    const images = [
        {
            url: './logo1.jpej',
          alt: 'Image 1',
          description: 'Description of Image 1',
          registerLink: 'https://example.com/register1',
        },
        {
          url: './logo.jpej',
          alt: 'Image 2',
          description: 'Description of Image 2',
          registerLink: 'https://example.com/register2',
        },
      
      ];

    return (
        <>
        <GetSeminar images={images} />
        </>
    )
}

