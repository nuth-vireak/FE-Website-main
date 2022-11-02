import React, {useEffect, useRef} from 'react';
import './styles/academic.scss';
export default function Academic() {

    let content_ref = useRef();
    let hr_ref = useRef();

    const handleContentAppear = () => {
        hr_ref.current.style.transition = 'all 1s';
        hr_ref.current.style.width = '100px';
        hr_ref.current.style.opacity = '1';
    }

    const handleContentDisappear = () => {
        hr_ref.current.style.transition = 'all 1s';
        hr_ref.current.style.width = '0px';
        hr_ref.current.style.opacity = '0';
    }

    useEffect(() => {
        const handleScrollEvent = () => {
            if(content_ref.current)
            {
                if(window.scrollY / content_ref.current.offsetTop < 0.9 || window.scrollY / content_ref.current.offsetTop > 1.1)
                {
                    handleContentDisappear();
                }else if(window.scrollY / content_ref.current.offsetTop > 0.9) {
                    handleContentAppear();
                }
            }
        }
        window.addEventListener("scroll", handleScrollEvent)
        // clean-up function
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, [])


    return (
        <div ref={content_ref} className="academic-container">
            <div className="body">
                <div className="header">
                    <h1>Academics</h1>
                    <hr ref={hr_ref}/>
                </div>
                <div className="main row gx-5 gy-5">
                    <div className="img-hover-zoom undergraduated col-12 col-md-6">
                        <div className="img-hover-zoom">
                            <img className="image active" alt='img0' src="https://www.sussex.ac.uk/wcm/assets/media/original/40627.jpg" width="100%"/>    
                        </div>
                        <div className="desc">
                            <h5>Undergraduated Education</h5>
                            <p>Information technology engineering (ITE) involves an architectural approach for planning, analyzing, designing, and implementing applications.The goal of ITE is to allow for a business to improve the way it manages its resources such as capital, people, and information systems to achieve its business goals.</p>
                        </div>
                    </div>
                    <div className="graduated col-12 col-md-6">
                        <div className="img-hover-zoom">
                            <img className="image active" alt="img1" src="https://www.sussex.ac.uk/wcm/assets/media/original/40627.jpg" width="100%"/>
                        </div>
                        <div className="desc">
                            <h5>Graduated Education</h5>
                            <p>Information technology engineering (ITE) involves an architectural approach for planning, analyzing, designing, and implementing applications.The goal of ITE is to allow for a business to improve the way it manages its resources such as capital, people, and information systems to achieve its business goals.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <button className="view-more-btn btn btn-sm">
                    More About Academics
                </button>
            </div>
        </div>
    )
}
