import React from 'react';
import 'component/reused-component/header/style/detailHeader.scss'
import Banner from "component/reused-component/banner/headerBanner/banner";

function DetailHeader({title}) {
    return (
        <h2 className={"detail-header"}>
            {title}
        </h2>
    );
}

Banner.defaultProps =
    {
        title:"Title-Props"
    }

export default DetailHeader;