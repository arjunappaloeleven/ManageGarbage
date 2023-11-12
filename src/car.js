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
            src: 'https://cdn.downtoearth.org.in/library/large/2019-01-02/0.57857500_1546426848_dig063842.jpg',
            width: '600px',  
            height: '400px', 
          },
          {
            src: 'https://nawe.group/wp-content/uploads/2020/12/trash.jpg',
            width: '800px',  
            height: '400px', 
          },
          {
            src: 'https://www.chinadailyhk.com/attachments/image/148/163/1/642490_324940/642490_324940_800_auto_jpg.jpg',
            width: '800px',  
            height: '400px', 
          },
          {
            src: 'https://www.chinasmack.com/wp-content/uploads/chinasmack/2011/08/guiyang-chinese-migrant-workers-children-scavenging-garbage-landfill-02.jpg',
            width: '800px',  
            height: '400px', 
          },
        ].map((image, index) => (
          <div key={index} className='bg-blue-100/20 border-1 border-blue-800/50 rounded'>
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