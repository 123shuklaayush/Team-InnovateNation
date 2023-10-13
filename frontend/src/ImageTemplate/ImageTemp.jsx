import React from 'react'
import banner1 from "../image/template1.jpg"
import banner2 from "../image/template2.jpg"
import banner3 from "../image/template3.jpg";
const ImageTemp = () => {
    return (
        <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={banner1} class="d-block w-100" alt="poster-1"/>
            </div>
            <div class="carousel-item">
              <img src={banner2} class="d-block w-100" alt="poster-2"/>
            </div>
            <div class="carousel-item">
              <img src={banner3} class="d-block w-100" alt="poster-2"/>
            </div>
                        
          </div>
        </div><br />
    
        </>
      )
}

export default ImageTemp
