import React from 'react';
import styled from 'styled-components'
import PartnerCard from "./partnerCard";
import 'component/page/collaboration/style/partner.css'

import logo_1 from 'assets/logo/partner/logo_1.png'
import logo_2 from 'assets/logo/partner/logo_2.png'
import logo_3 from 'assets/logo/partner/logo_3.png'
import logo_4 from 'assets/logo/partner/logo_4.png'
import SmallHeader from "component/reused-component/header/smallHeader";
import {SectionHeaderStyled} from "component/reused-component/header/section-header.styled";

const partnerList =
    [
        {
            name:"CellCard",
            logo:logo_1,
            description:"Launched in 1998, Cellcard has become Cambodia's standard for " +
                "quality, value and service, and continues to be vigilant in developing " +
                "new ways to support and enhance the way its customers communicate through" +
                " regular network upgrades, development of innovative plans and products," +
                " and putting an emphasis on customer care."
        },
        {
            name:"CompanyName",
            logo:logo_2,
            description:"Launched in 1998, Cellcard has become Cambodia's standard for " +
                "quality, value and service, and continues to be vigilant in developing " +
                "new ways to support and enhance the way its customers communicate through" +
                " regular network upgrades, development of innovative plans and products," +
                " and putting an emphasis on customer care."
        },
        {
            name:"University",
            logo:logo_3,
            description:"Launched in 1998, Cellcard has become Cambodia's standard for " +
                "quality, value and service, and continues to be vigilant in developing " +
                "new ways to support and enhance the way its customers communicate through" +
                " regular network upgrades, development of innovative plans and products," +
                " and putting an emphasis on customer care."
        },
        {
            name:"University",
            logo:logo_4,
            description:"Launched in 1998, Cellcard has become Cambodia's standard for " +
                "quality, value and service, and continues to be vigilant in developing " +
                "new ways to support and enhance the way its customers communicate through" +
                " regular network upgrades, development of innovative plans and products," +
                " and putting an emphasis on customer care."
        },
    ]

function Partner({containerStyle,cardStyle,title,headerColor})
{
    const WhiteSectionHeader = styled(SectionHeaderStyled)
        `
            color:${props => props.headerColor};
        `
    return (
        <div className={containerStyle}>
            {
                headerColor !== null ?
                <WhiteSectionHeader headerColor={headerColor}>
                    {title}
                </WhiteSectionHeader>
                    :
                <SectionHeaderStyled>
                    {title}
                </SectionHeaderStyled>
            }
            <div className={`Partner_Layout`}>
                {
                    partnerList.map( ({name,logo,description},index) =>
                    {
                        return <PartnerCard  classes={cardStyle} key={index} name={name} logo={logo} description={description}/>
                    })
                }
            </div>
        </div>
    );
}

Partner.defaultProps =
    {
        title: "Partner"
    }

export default Partner;