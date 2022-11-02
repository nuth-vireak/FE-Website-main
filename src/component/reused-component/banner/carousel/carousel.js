import React, { useEffect } from "react";
import "./carousel.scss";
import styled from "styled-components";
import {Carousel} from 'bootstrap';

const Image = styled.span`
  content: url("${props => props.primaryUrl}");
  display: block;
  width: 100%;
  @media (max-width: 1200px) {
    height: 420px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    content: url(${props => props.secondaryUrl});
    height: auto;
    object-fit: fill;
  }
`
/**
 * The carousel is a slideshow for cycling through a series of content such as banner/image
 * @param {strings} name give a specific name to carousel 
 * @param {strings} banners list of banners with its content. Accepted format : [{imgUrl: 'path', templateWitContents: 'anything'}]
 * @param {strings} align_content left | center | right
 * @returns carousel view
 */
function MyCarousel({ name, banners = [], align_contents = 'right' }) {

  useEffect(()=>{
    new Carousel(document.querySelector(`#${name}`)).cycle();
  },[])

  return (
    <div
      id={`${name}`}
      className="carousel slide carousel-fade"
      // data-bs-ride="carousel"
      // data-bs-interval="500"
    >
      <div className="carousel-indicators">
        {
          // genrate indicators
          banners.length !== 1 ? banners.map((_banner, index) => {
            return (
              <button
                key={`indicator ${index}`}
                type="button"
                data-bs-target={`#${name}`}
                data-bs-slide-to={index}
                className={`${index ? "" : "active"} rounded-circle`}
                aria-current={`${index ? "" : "true"}`.toString()}
                aria-label={`Slide ${index}`}
              ></button>
            );
          }) : ''
        }
      </div>



      <div className="carousel-inner">
        {
          // genrate banner
          banners.map((banner, index) => {
            return (
              <div className={`carousel-item ${index ? "" : "active"}`} key={`carousel-item ${index}`}>
                <div className="container-fluid" style={{
                  justifyContent: 'center',
                  height: '100%',
                  position: 'absolute',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div className="banner-cols row" style={{ height: 'inherit'}}>
                    <div className="col-12 custom-col-md-4 d-flex align-items-center p-0">
                      {align_contents === 'left' ? banner.templateWitContents : ''}
                    </div>
                    <div className="col-12 custom-col-md-4 d-flex align-items-center p-0">
                      {align_contents === 'center' ? banner.templateWitContents : ''}
                    </div>
                    <div className="col-12 custom-col-md-4 d-flex align-items-center p-0">
                      {align_contents === 'right' ? banner.templateWitContents : ''}
                    </div>
                  </div>
                </div>
                <Image
                  key={`banner${index}`}
                  primaryUrl={banner.primaryUrl}
                  secondaryUrl={banner.secondaryUrl}

                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default MyCarousel;
