import React from 'react'
import banner1 from "../image/2022111451.jpg"
import banner2 from "../image/20221011100.png"
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
                        
          </div>
        </div><br />
    
        </>
      )
}

export default ImageTemp
