import React from 'react';
import styled from "styled-components";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";

const PageNotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  &:before
  {
    all:unset;
  }
  transform: translate(-50%,-50%);
  img{
    max-width: 300px;
    width: 100%;
  }
  h2
  {
    &:before
    {
      all:unset;
    }
  }
`

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    background-color: #014164;
`
const Text = styled(SectionHeaderStyled)`
    //text-transform:unset;
    text-align: center;
    color: #FFF;
`



const ComingSoon = () => {
    return (
        <Wrapper>
            <PageNotFoundStyle>
                <img src={require('assets/icon/error/coming-soon.png').default}/>
                <Text>This page is under construction. It will available soon.</Text>
            </PageNotFoundStyle>
        </Wrapper>
    )
}

export default ComingSoon;