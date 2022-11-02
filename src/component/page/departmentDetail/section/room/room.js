import React from 'react';

import '../../style/room.css'
import '../../style/roomResponsive.css'

import imgUrl from 'assets/departmentDetail/ITE_Room.jpg'
import imgUrl_mobile from 'assets/departmentDetail/Background-mobile.png'

import Modal from 'react-modal'
import {roomList} from "component/page/departmentDetail/util/SectionProps";
import {InView} from "react-intersection-observer";


const customStyles = {
    overlay:
        {
            backgroundColor:"rgba(0,0,0,0.9)",
        },
    content: {
        backgroundColor:"unset",
        borderRadius:"unset",
        border:"unset",
        padding:"unset",
        maxWidth:"60%",
        minWidth:"400px",
        height:'auto%',
        overflow:"hidden",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
},
};




function Room({threshold,sectionLabel,handleIntersection})
{
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [roomImg,setRoomImg] = React.useState("bus.jpg")

    function openModal(img)
    {
        setRoomImg(img)
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.overflow = 'hidden'
    }

   function onAfterClose () {
        document.body.style.overflow = 'unset'
    }

    function closeModal()
    {
        setIsOpen(false);
    }

    return (
        <InView
            threshold={threshold}
            onChange={(inView,entry) => handleIntersection(inView,entry,sectionLabel)}
        >
            {({ref})=>
            {
                return (
                    <div ref={ref} className={"content-room"} id={"content-room"}>

                    <div className="radialGradient">
                        <img className={"background"} src={imgUrl} alt={""}/>
                        <img className={"background_mobile"} src={imgUrl_mobile} alt={""}/>
                        <div className={"content-description"}>
                            <h2 className={"title"}>
                                study & laboratory
                            </h2>

                            <p className={"description"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            </p>

                            <div className={"image-collection"}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {
                                    roomList.map((room,index)=>
                                    {
                                        return <img
                                            className={"roomImage"}
                                            onClick={()=> openModal(room.modalImgUrl)}
                                            key={index}
                                            src={require(`assets/${room.imgUrl}`).default}
                                            alt=""/>
                                    })
                                }

                                <Modal
                                    ariaHideApp={false}
                                    preventScroll={true}
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onAfterClose={onAfterClose}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal">

                                    {/*<button onClick={closeModal}>close</button>*/}

                                    <i onClick={closeModal} className="fas fa-times closeIcon"/>
                                    <img className={"model-img"} src={require(`assets/${roomImg}`).default} alt=""/>
                                </Modal>
                            </div>
                        </div>
                    </div>


                </div>
                )
            }}
        </InView>

    );
}

export default Room;