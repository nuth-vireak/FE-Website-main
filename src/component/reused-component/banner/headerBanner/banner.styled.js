import styled from 'styled-components'
export const StyledBanner = styled.div`
  .banner-background-img
  {

    display: flex;
    align-items: center;

    //padding: 10vh 0;

    width: 100%;
    height: calc(70vh);
    //height: calc(50vh);
    min-height: 300px;
    max-height: 500px;
    //background: linear-gradient(270deg,rgb(2, 85, 138,.60) 15%, rgba(2, 85, 138,.60) 100%), url(${(props)=>props.imgUrl});
    
    background: linear-gradient(270deg,rgb(2, 85, 138, ${(props=>props.opacityColor)}) 0%, rgba(2, 85, 138,1) 100%), url(${(props)=>props.imgUrl});
    background-position: ${(props)=>props.positionX} ${(props)=>props.positionY};
    background-size: cover;
    //background-position:50% 50%;
    transition:all 250ms linear,transform 150ms ease-in-out,max-height 250ms ease;

    .banner-title
    {
      white-space:break-spaces;
      margin-bottom:unset;
      padding-left:7%;
      //margin-left: .75em;
      text-transform: uppercase;
      font-family: var(--header-font);
      font-style: normal;
      font-weight: bold;
      font-size: 6rem;
      color: #FFFFFF;
      
    }

    @media (max-width:1366px)
    {
      background: linear-gradient(270deg,rgb(2, 85, 138,.60) 15%, rgba(2, 85, 138,.60) 100%), url(${(props)=>props.imgUrl});
      background-position: ${(props)=>props.positionX} ${(props)=>props.positionY};
      background-size: cover;
      //background-position:50% 50%;

    }

    @media screen and (max-width: 1024px)
    {
      .banner-title
      {
        font-size: 5rem;
      }
    }

    @media (max-width: 767px)
    {
      justify-content: center;
      //text-align: center;

      .banner-title
      {
        padding:unset;
        font-size: 4rem;
      }
    }

    @media (max-width: 479px)
    {
      justify-content: center;
      .banner-title
      {
        font-size: clamp(2.5em,10vw,3em) ;
      }
    }
  }
  @media (max-width:480px)
  {

    .banner-background-img
    {
      min-height: unset;
      max-height: 250px;

      .banner-title
      {
        margin-top: 1rem;
      }
    }
  }

`

StyledBanner.defaultProps = {
    opacityColor:0
}