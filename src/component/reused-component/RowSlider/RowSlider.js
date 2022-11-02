import React, {useRef, useState} from 'react';
import styled from "styled-components";

function RowSlider({componentList})
{
    const pageRef = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
    const [slide, setSlide] = useState(2);
    const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth",block: 'nearest'});

    const scrollToPane = (num) => {
        if(num < componentList.length-1)
        {
            setSlide(num + 1)
            scrollToRef(pageRef[num + 1])
        }
    };

    const scrollBackPane = (num) => {
        if(num > 2)
        {
            console.log("scroll")
            setSlide(num - 1)
            scrollToRef(pageRef[num - 3])
        }
    };

    return (
        <RowSliderStyled>

            {(slide< componentList.length-1) &&  <i className="fas fa-chevron-right slide-show-button" onClick={() => scrollToPane(slide)} />}
            {componentList.map((component,index) =>
                <ComponentWrapperStyled ref={pageRef[index]} key={index}>
                    {component}
                </ComponentWrapperStyled>
            )}
            {((slide > 2)) && <i className="fas fa-chevron-left slide-show-button" onClick={() => scrollBackPane(slide)}/>}

        </RowSliderStyled>
    );
}

const RowSliderStyled = styled.div
    `
      ::-webkit-scrollbar {
        display: none;
      }

      gap: clamp(1em,2vw,2em);
      display: flex;


      align-items: start;
      -ms-overflow-style: none;

      overflow-y: hidden;
      overflow-x: hidden;

      @media (max-width:768px)
      {
        overflow-x: auto;

      }

      .slide-show-button {
        padding: .75em .25em;
        color: rgba(1, 65, 100, 0.8);
        //color:var(--navbar-item-color);
        position: absolute;
        //left:0;
        top: 38%;
        transition: color 150ms ease-in-out;

        @media (max-width:1366px)
        {
          top: 42%;
        }

        &:hover {
          color: #01375a;
          filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
          //color:var(--primary-text-color);
          //background:#003345X
        }
        @media (max-width: 768px)
        {
          display:none;
        }
      }

      .fa-chevron-right {

        right: 1%;
        font-size: clamp(2.5em, 4vw, 4em);
        @media (max-width: 1024px)
        {
          right: 1%;
        }
      }

      .fa-chevron-left {
        left: 1%;
        font-size: clamp(2.5em, 4vw, 4em);
        @media (max-width: 1024px)
        {
          left: .5%;
        }
      }
    `

const ComponentWrapperStyled = styled.div
    `
      flex: 0 0 32%;
      width: 32%;

      @media (max-width: 1336px)
      {
        flex: 0 0 48%;
        width: 48%;
      }
      @media (max-width: 768px)
      {
        flex: 0 0 75%;
        width: 75%;
      }
    `

export default RowSlider;