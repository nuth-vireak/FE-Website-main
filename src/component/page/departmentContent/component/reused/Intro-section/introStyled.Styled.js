import styled from "styled-components";

const IntroSectionHeaderStyle = styled.h1
    `
      font-size: clamp(2rem,5vw,6rem);
      text-transform: capitalize;
        color:${(props)=>(props.ColorTheme.textColor)};
        font-family: var(--font-merriwearther);
        font-weight: 800;
        margin-bottom: .5em;
        position: relative;
        &::before
        {
          position:absolute;
          content:"";
          display: block;
          width: 20%;
          top: -.2em;
          height: .1em;
          background:${(props)=>(props.ColorTheme.mainColor)};
        }
    `
const IntroSectionSubTitle = styled.h2
    `
      font-size: clamp(1.5rem,3vw,3.5rem);
      text-transform: capitalize;
      color:${(props) => (props.departmentTheme)};
      font-family: var(--font-merriwearther);
      font-weight: 600;
      margin-bottom: .5em;
      position: relative;
    `
IntroSectionSubTitle.defaultProps =
{
    departmentTheme:"white"
}


const IntroSectionDescriptionStyle = styled.p
    `
      font-family:var(--font-quicksand);
      font-weight: 500;
      font-size:clamp(0.87em,1.25vw,1.5em);
      color:#B8BCBF;
    `

const IntroSectionLayoutStyle = styled.section`
  background: linear-gradient(90deg, ${(props)=>(props.ColorTheme.linearColor)} 30.20%, rgba(0, 0, 0, 0) 100%), url(${(props)=>props.imgUrl}) center;
 
  background-size: cover;
  
  padding: max(5rem,5%) 7%;
 
  //background-position: 50% 50%;
  display: flex;
  .wrapper-flex-right
  {
    transition: flex-basis 250ms ease-in-out;
    flex-basis: 50%;
    margin-top: clamp(1rem,6vw,5rem);
    
    .intro-section-title
    {
      text-transform: capitalize;
      color:${(props)=>(props.ColorTheme.textColor)};
      font-family: var(--font-merriwearther);
      font-weight: 800;
      margin-bottom: .5em;
      position: relative;
      &::before
      {
        position:absolute;
        content:"";
        display: block;
        width: 20%;
        top: -.2em;           
        height: .1em;
        background:${(props)=>(props.ColorTheme.mainColor)};
      }
    }
    .intro-section-description
    {
      font-family:var(--font-quicksand);
      font-weight: 500;
      font-size:clamp(0.87em,1.25vw,1.5em);
      color:#B8BCBF;
    }
  }
  
  @media (max-width:1024px)
  {
    background: linear-gradient(90deg, ${(props)=>(props.ColorTheme.linearColor)} 50%, rgba(0, 0, 0, 0) 100%), url(${(props)=>props.imgUrl})  center;
    background-size: cover;

    .wrapper-flex-right
    {
         
    }
  }
  
  @media (max-width:480px)
  {
      background: linear-gradient(0deg, rgba(${(props)=>(props.ColorTheme.linearAlpha)}), rgba(${(props)=>(props.ColorTheme.linearAlpha)})), url(${(props)=>props.imgUrl}) center;
      background-size: cover;
      //padding-bottom: max(3rem,5%);
      
     .wrapper-flex-right
     {
          flex-basis: 100%;
          //margin-top:2em;
     }
  }
`

export {IntroSectionHeaderStyle,IntroSectionDescriptionStyle,IntroSectionLayoutStyle,IntroSectionSubTitle}