import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';

const MyComponent = () => {
  return (
    <>
    
      <ScrollCarousel
        autoplay
        autoplaySpeed={4}
        speed={2}
        onReady={() => console.log('I am ready')}
      >
        {[
          {
            src: 'https://images.mid-day.com/images/images/2022/apr/visa-rupay-india_e.jpg',
            width: '600px',  
            height: '400px', 
          },
          {
            src: 'https://cdn.britannica.com/02/160902-050-B58BAD84/Credit-cards.jpg',
            width: '500px',  
            height: '400px', 
          },
          {
            src: 'https://media.istockphoto.com/id/636945786/photo/person-holding-out-the-new-indian-rs-500-note.jpg?s=612x612&w=0&k=20&c=w7j05Yv4M1Fr5KQu85y0Lcws5xAK4IxrKdJkHVlkxYU=',
            width: '600px',  
            height: '400px', 
          },
          {
            src: 'https://www.livemint.com/lm-img/img/2023/07/13/1600x900/google_pay_1689254234981_1689254235302.jpg',
            width: '600px',  
            height: '400px', 
          },
        ].map((image, index) => (
          <div key={index} className='bg-blue-100/20 border-1 border-blue-800/50 rounded'
            style={{
              margin: '20px', // Adjust the margin for padding
              padding: '10px', // Optional: You can also use padding instead of margin
             // Optional: Add a border for clarity
              borderRadius: '10px', // Optional: Add rounded corners
               // Optional: Set a background color
            }}
          >
            <img
              src={image.src}
              alt={`Image ${index}`}
              style={{ width: image.width, height: image.height }}
            />
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default MyComponent;