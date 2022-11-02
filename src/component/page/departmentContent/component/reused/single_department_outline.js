import React from 'react';

function SingleDepartmentOutline(props) {
    return (
        <section className="tted-outline-section flex-layout-column global-padding">
        <h1 className="outline-title header-l-font-size header-font-style">{outlineSection.title}</h1>
        <p className="outline-description description-bold-style tted-outline-padding">{outlineSection.description}</p>
    </section>
    );
}

export default SingleDepartmentOutline;