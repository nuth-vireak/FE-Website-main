import React from 'react';
import {StyledBanner} from "component/reused-component/banner/headerBanner/banner.styled";


function Banner({imgUrl,title,positionX,positionY})
{
    // const [opacity,setOpacity] = React.useState(0)
    // const bannerRef = React.useRef(null)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const handleScrollEvent = () =>
    // {
    //     if(bannerRef.current.getBoundingClientRect().y>-400)
    //     {
    //         setOpacity(Math.abs(bannerRef.current.getBoundingClientRect().y /400).toFixed(2))
    //     }
    //
    //     // return console.log(`[scroll]${bannerRef.current.getBoundingClientRect().y}`)
    //     // return bannerRef.current.getBoundingClientRect().y
    // }

    //
    // useEffect(() => {
    //
    //     window.addEventListener("scroll", handleScrollEvent)
    //     return () => {
    //         window.removeEventListener("scroll", handleScrollEvent)
    //     };
    // }, [handleScrollEvent]);

    return (
        <StyledBanner  imgUrl={imgUrl} positionX={positionX} positionY={positionY}>
            <div className={"banner-background-img"}>
                <h1 className={"banner-title"}>{title}</h1>
            </div>
        </StyledBanner>
    );
}

export default Banner;