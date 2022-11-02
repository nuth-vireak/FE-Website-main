import React from 'react';
import "./breadcrumbnavStyle.scss";





export default function breadcrumbnav() {
    return (
        <div className="container-fluid breadcrumbnav">
            <div className="row">
                
                <h4 className = "col">FAQ</h4>

                <nav className = "col navigation" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/home">Home</a></li>
                        <li class="breadcrumb-item"><a href="/faq">Faq</a></li>
                        {/* <li class="breadcrumb-item active" aria-current="page">general</li> */}
                    </ol>
                </nav>
            </div>
        </div>
    )
}
