import{Clientsection} from '../constants'
import {
    tich_tv,
    pellyclinic,
    pressreach_logo,
    omnutritionist_logo,
    Etruscus_logo,
    native_client,
    Metallis,
    Lollyprop_lOgo,
    GG_logo,
    Cates_London_logo,
    dockleys,
    
} from '../assets';
import {useState} from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
// import required modules
import { Navigation } from "swiper";
const Clients = (props) => {

    return ( <>
    
        <section id="section-clients" className="section-clients" style={{paddingBottom: "30px",paddingTop:"50px"}} >
            <div className="page-padding">
                <div className="container-large">
                <h1 data-w-id="9de980ff-7c97-834e-9e35-df0c496cdfd2" 
                    style={{fontSize: props.page == "aboutherosection" ? "3rem" : "" ,paddingBottom:"50px",textAlign:"center"}}
                        > 
                        {Clientsection[0].heading}
                        
                            
                        </h1>
                    <div
                        // data-delay="4000"
                        data-animation="slide"
                        className="client-slider w-slider"
                        data-autoplay="true"
                        data-easing="ease"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87ca"
                        data-autoplay-limit="1"
                        data-nav-spacing="2"
                        // data-duration="500"
                        data-infinite="true"
                        id="w-node-fb3ac194-9ec9-8d97-0778-85c2a36b87ca-a36b87bd"
                    >
                        <div className="w-slider-mask">
                            <section className="box">
                                <Swiper navigation={true} modules={[Navigation]} className=" slidertes"   autoplay={true} 
slidesPerView={5} loop={true}  breakpoints={{
320: {
    // width: 300,
    slidesPerView: 1,
    spaceBetween: 20,
    },
576: {
// width: 576,
slidesPerView: 2,
spaceBetween: 30,
},
768: {
    // width: 768,
    slidesPerView: 2,
    spaceBetween: 40,
    },
992: {
    // width: 992,
    slidesPerView: 4,
    },
1200: {
    // width: 1200,
    slidesPerView: 4,
    },
}}>
                        
                                    <SwiperSlide>
                                            <div className="slide_box">
                                                 <img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                            </div>
                                        </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                                 <img src={pellyclinic} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={pressreach_logo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={omnutritionist_logo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={Etruscus_logo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={native_client} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={Metallis} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={Lollyprop_lOgo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={GG_logo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={Cates_London_logo} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>    
                                        <div className="slide_box">
                                            <img src={dockleys} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </section>
                        </div>
                    </div>
                </div>   
            </div>
        </section>
        </>
    )
}

export default Clients