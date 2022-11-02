import React,{useRef,useState} from 'react'
import styled from 'styled-components'

export const SlideListItem = () => {

    const pageRef = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];

    const [slide, setSlide] = useState(2);

    const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });

    const scrollToPane = (num) => {
        if(num < pageRef.length - 1)
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
        <div className="App">
            <div className="menu">
                <button onClick={() => scrollBackPane(slide)}>back</button>
                <button onClick={() => scrollToPane(slide)}>next</button>
            </div>

            <i className="fas fa-apple-alt"></i>
            <div
                className="page"
                style={{ marginTop: "10px", marginBottom: "10px" }}>
                <SlideShow className={"section div"}>
                    <div className="div-color" ref={pageRef[0]}>
                        Section 1
                    </div>
                    <div className="div-color" ref={pageRef[1]}>
                        Section 2
                    </div>
                    <div className="div-color" ref={pageRef[2]}>
                        Section 3
                    </div>
                    <div className="div-color" ref={pageRef[3]}>
                        Section 4
                    </div>
                    <div className="div-color" ref={pageRef[4]}>
                        Section 5
                    </div>

                </SlideShow>
            </div>
        </div>
    );
};

const SlideShow = styled.div
    `
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;
      
      background:#3D4450;  
      display:flex;
      overflow:scroll;
      gap: clamp(.25em,.5em,1em);
      
      .div-color
      {
        
        height:300px;
        flex: 0 0 33.33%;
        width: 33.33%;

        :nth-child(even)
        {
          background-color:#01A5FF;
        }
        :nth-child(odd)
        {
          background-color:#41B4E6;
        }
      }
    `