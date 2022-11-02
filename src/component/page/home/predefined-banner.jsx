import CarouselContent from '../../reused-component/banner/carousel/carousel-content';
import asced_banner from 'assets/home/banner/md-screen/banner-n-ascs.png'
import ited_banner from 'assets/home/banner/md-screen/banner-n-ite.jpg'
import bioe_banner from 'assets/home/banner/md-screen/banner-n-bio.jpg'
import teed_banner from 'assets/home/banner/md-screen/banner-n-teed.jpg'
import fe_banner from 'assets/home/banner/md-screen/banner-n-fe.jpg'

import ascsd_banner_sm from 'assets/home/banner/sm-screen/banner-m-ascs.jpg'
import ited_banner_sm from 'assets/home/banner/sm-screen/banner-m-ite.png'
import bioe_banner_sm from 'assets/home/banner/sm-screen/banner-m-bio.png'
import teed_banner_sm from 'assets/home/banner/sm-screen/banner-m-teed.png'
import fe_banner_sm from 'assets/home/banner/sm-screen/banner-m-fe.png'

export var home_page_banners = [
    {
        primaryUrl: fe_banner,
        secondaryUrl: fe_banner_sm,
        templateWitContents: <CarouselContent
            title={'Faculty of Engineering'}
            content={`The Faculty of Engineering of the Royal University of Phnom Penh was established in 2013 with the vision of training students in the field of engineering to be highly capable, innovative ideas with ethical research to meet the needs and help develop current society and globalization.`}
            backgroundColor={''}
            height={'fit-content'}>
            {/* <button className="btn btn-primary btn-sm">Learn more</button> */}
        </CarouselContent>
    },
    {

        primaryUrl: asced_banner,
        secondaryUrl: ascsd_banner_sm,
        templateWitContents: <CarouselContent 
                                title={'Department Automation & Supply Chain Systems'}
                                content={"Automation and Supply Chain Systems is a branch of Engineering that deals with automation and digital manufacturing."}
                                backgroundColor={''}
                                height={'fit-content'}>
                                    {/* <button className="btn btn-primary btn-sm">Learn more</button> */}
                             </CarouselContent>
    },
    {

        primaryUrl: ited_banner,
        secondaryUrl: ited_banner_sm,
        templateWitContents: <CarouselContent
                                title={'Department of IT Engineering'}
                                content={`Information engineering, also known as information technology engineering, information engineering methodology or data engineering, is a software engineering approach to designing and developing information systems.`}
                                backgroundColor={''}
                                height={'fit-content'}>
                                    {/* <button className="btn btn-primary btn-sm">Learn more</button> */}
                             </CarouselContent>
    },
    {
        primaryUrl: bioe_banner,
        secondaryUrl: bioe_banner_sm,
        templateWitContents: <CarouselContent 
                                title={'Department of Bio Engineering'}
                                content={`Bio-Engineering/Biotechnology is a branch of engineering that deals with chemical and biological processes used to develop and make products and practices used in Medical and Health application, Food and Agro industry, Agriculture and Environment.`}
                                backgroundColor={''}
                                height={'fit-content'}>
                                    {/* <button className="btn btn-primary btn-sm">Learn more</button> */}
                             </CarouselContent>
    },
    {
        primaryUrl: teed_banner,
        secondaryUrl: teed_banner_sm,
        templateWitContents: <CarouselContent 
                                title={'Department of \nTE Engineering'}
                                content={`Telecommunication and Electronics Engineering integrates two technologies including Telecommunication technology and Electronics technology.`}
                                backgroundColor={''}
                                height={'fit-content'}>
                                    {/* <button className="btn btn-primary btn-sm">Learn more</button> */}
                             </CarouselContent>
    }
];