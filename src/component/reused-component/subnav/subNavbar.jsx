import React from 'react';
import "./subNavbarStyle.scss";


export default function subNavbar() {
    return (
        <div className="sub-nav-bar">
            <ul className="nav-catagories nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-bio-tab" data-bs-toggle="pill" data-bs-target="#pills-bio" type="button" role="tab" aria-controls="pills-bio" aria-selected="false">BIO</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-ite-tab" data-bs-toggle="pill" data-bs-target="#pills-ite" type="button" role="tab" aria-controls="pills-ite" aria-selected="false">ITE</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-tee-tab" data-bs-toggle="pill" data-bs-target="#pills-tee" type="button" role="tab" aria-controls="pills-tee" aria-selected="false">TEED</button>
                </li>
            </ul>
        </div>
    )
}

