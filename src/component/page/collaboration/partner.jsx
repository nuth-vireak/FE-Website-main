import React from 'react';
import PartnerCard from "component/page/collaboration/partnerCard";
import './style/partner.css'

import logo_1 from 'assets/logo/partner/logo_1.png'
import logo_2 from 'assets/logo/partner/logo_2.png'
import logo_3 from 'assets/logo/partner/logo_3.png'

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

    ]

function Partner(props)
{
    return (
        <div className={"Partner"}>

            <div className={"Partner_Layout"}>
                {
                    partnerList.map( ({name,logo,description},index) =>
                    {
                        return <PartnerCard key={index} name={name} logo={logo} description={description} />
                    })
                }
            </div>
        </div>
    );
}

export default Partner;