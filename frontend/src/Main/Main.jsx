import React, { useRef, useState } from 'react';
// Import Swiper React components
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Main.css";
import docsImage from '../image/docsImage-removebg-preview.png';
import botImage from '../image/botImage-removebg-preview.png';
import nerImage from '../image/nerImage-removebg-preview.png';
import userImage from '../image/userLogo-removebg-preview.png';
import banner from '../image/Screenshot 2023-09-26 015743.png';

const cardData = [
  {
    image: docsImage,
    title: "Unified Document Management",
    text: "Access all your documents in one place for streamlined organization and easy retrieval. Simplify document management with our user-friendly platform.",
  },
  {
    image: nerImage,
    title: "Effortless Document Summarization",
    text: "Struggling with lengthy documents? Try our summarization feature. It condenses content, delivering the most impactful points for efficient reading",
  },
  {
    image: userImage,
    title: "Secure Login Using Case ID",
    text: "Access your personalized case details with ease using a secure Case ID login provided on your mail. Streamlined, hassle-free access to critical information 24/7.",
  },
  {
    image: botImage,
    title: "Smart Chatbot Assistance",
    text: "Get answers to your questions with our intelligent chatbot. It guides you to solutions for the problems you encounter, ensuring a seamless user experience.",
  },
];

const cardImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  transition: 'filter 0.3s ease', // Add transition for smooth effect
};

const Main = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "40px"}}>
        {cardData.map((card, index) => (
          <div className="col" key={index} style={{ display:"flex", justifyContent:"center" }}>
            <div className="card" style={{ width: '18rem' }}>
              {/* Apply hover effect to the image */}
              <img
                className="card-img-top"
                src={card.image}
                alt={card.title}
                style={cardImageStyle}
                onMouseOver={(e) => e.target.style.filter = 'brightness(1.2)'}
                onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="image-container">
        <img src={banner} alt="imagebanner" width={"100%"}/>
      </div>

      <div className="latestnews">
      <h4 className='latest-news-heading'>Latest News</h4>
        
        <div className="col1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero ac orci
            ultrices interdum. Nulla facilisi. Pellentesque euismod ligula nec velit elementum
            efficitur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo explicabo, atque soluta saepe sapiente officiis voluptatibus molestias. Enim sed reprehenderit tenetur perspiciatis exercitationem corporis quas illo optio necessitatibus iure nobis dolore, aliquam illum sunt quod odit molestiae assumenda consequuntur.
          </p>
        </div>
        <div className="col2">
          <p>
            Fusce hendrerit purus nec tortor vehicula, sit amet dapibus justo facilisis. Proin
            posuere justo ac sollicitudin dignissim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempora iste ex sit sunt, reiciendis totam accusamus eligendi modi ipsam iure quasi deserunt?
          </p>
        </div>
        <div className="col3">
          <p>
            Vestibulum nec metus id lectus bibendum feugiat ac in ligula. Aenean nec ultricies odio.
            Vivamus ut vestibulum nunc. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eaque explicabo ipsam ab totam voluptatem laborum non sed harum at odio maiores accusantium, voluptatum autem eos dolore dicta quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
