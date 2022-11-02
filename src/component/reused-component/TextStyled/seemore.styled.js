import styled from "styled-components";
import {Link} from "react-router-dom";


const SeeMoreStyled = styled.p
    `
      font-family: var(--font-manrope);
      font-weight: bold;
      font-size: clamp(.70em,1.15vw,1.15em);
      margin-bottom:unset;
    `
const RouteStyled = styled.div
    `
      a
      {
        color:#000;
        text-decoration: none;
        &:hover
        {
          color:#014164;
        }
      }
    `
export const SeeMoreStyledLink = ({link, label}) =>
{
    return <RouteStyled>
        <Link to={link}>
            <SeeMoreStyled>
                {label}
            </SeeMoreStyled>
        </Link>
    </RouteStyled>
}