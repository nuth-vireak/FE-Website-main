import React from 'react';
import './../style/collaborationStyle.scss'
import pic1 from './../../../../assets/about_us/collaborationImg1.jpg';
import pic2 from './../../../../assets/about_us/collaborationImg2.jpg';
import pic3 from './../../../../assets/about_us/collaborationImg3.jpg';
export default function Collaboration() {

    return (

        <div className={"Collaboration"}>

            <div className="container-fluid">

                <div className="row header">

                    <div className="col title_collaboration ">

                        <h1>Collaboration</h1>

                    </div>

                </div>

                <div className="row content">

                    <div className="col ">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    </div>

                </div>

                <div className="row collaborationImg d-flex justify-content-between">


                    <img src={pic1} className="col-md-3 pic" />
                    <img src={pic2} className="col-md-3 pic" />
                    <img src={pic3} className="col-md-3 pic" />


                </div>



            </div>
        </div>

    );

}


