import React from 'react';
import {contact} from "../constants";
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
import {georgecollado , jason , joshRhoades , lukasSliwka} from "../assets";
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);
// import required modules
import { Navigation } from "swiper";

const Contact = (props) => {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs.sendForm("service_5wu894j","template_nmof4ja" , e.target ,'3W9SQihQ7FPYaOCaM')
        emailjs.sendForm('service_hboh5lq', 'template_sxnjyan', e.target , 'gMq8XhTDefn0aA8UE')
          .then((result) => {
              
          }, (error) => {
            
          });
          e.target.reset();
          showResult(true);
      };
      
      const [bot, setBot] = useState(0);
       const  checkbot = event => {
        
        if(event.target.value.length >= 1){
            setBot(1);
        }
        else{
            setBot(0);
        }
       
       
       
      };
     
     
      


  return (
    <>
    <section id="section-contact" className="section-contact" style={{ background:
        `${props.page == "homeherosection" ? "#16161A":"#1B1C20"}`
    }}>
                        <div className="page-padding">
                            <div className="container-large">
                                <div className="padding-vertical_section">
                                    <div className="w-layout-grid section-2-columns">
                             
                             
                                        <div className="contact-content">
                                            <div data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c3" className="section-title">{contact[0].title}</div>
                                            <h2 data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c5">{contact[0].heading}</h2>
                                            <div className="margin-top margin-medium"><p data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c8" className="text-size-large text-color-light">{contact[0].contactformsubject}</p></div>
                                        </div>
                                    
                                    
                                        <div
                                            data-delay="4000"
                                            data-animation="slide"
                                            className="testimonials-slider w-slider"
                                            data-autoplay="true"
                                            data-easing="ease"
                                            data-hide-arrows="false"
                                            data-disable-swipe="false"
                                            data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87ca"
                                            data-autoplay-limit="0"
                                            data-nav-spacing="4"
                                            data-duration="500"
                                            data-infinite="true"
                                            id="w-node-fb3ac194-9ec9-8d97-0778-85c2a36b87ca-a36b87bd"

                                          
                                        >
                                            <div className="w-slider-mask">
                                                


                                            <section className="box">
    <Swiper navigation={true} modules={[Navigation]} className=" slidertes"   autoplay={true}>
                           
                           <SwiperSlide>

                                             <div className="margin-top margin-medium slide-box">
                                                    
                                             <img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
                                                   
                                                        <div className="testimonial-author_component slide-author">
                                                            {/* <div className="testimonial-author-photo">
                                                                <img
                                                                    src={georgecollado}
                                                                    loading="lazy"
                                                                    alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                                                                />
                                                            </div> */}
                                                            <div className="margin-small slide-box-child">
                                                                <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                                                                {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                                                                {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                                                                {/* </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                  
      </SwiperSlide>
      <SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>
<SwiperSlide>

<div className="margin-top margin-medium slide-box">
       
<img src={tich_tv} loading="lazy" data-w-id="dc5053a6-1354-5ce1-a478-1cd4db368524" alt="flo by moen brand logo" className="client-logo " id='one'/>
      
           <div className="testimonial-author_component slide-author">
               {/* <div className="testimonial-author-photo">
                   <img
                       src={georgecollado}
                       loading="lazy"
                       alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                   />
               </div> */}
               <div className="margin-small slide-box-child">
                   <div className="testimonial-author-name slide-author-name">{contact[0].slidename1}</div>
                   {/* <div className="testimonial-author-position">{contact[0].nameheading1} */}
                   {/* <span className="position-span">{contact[0].nameheading1}</span> */}
                   {/* </div> */}
               </div>
           </div>
       </div>
     
</SwiperSlide>

      
    
   
                                               
      
                                                 </Swiper>
                                                  </section>
                                             </div>
                                            </div>
                                      
                                      
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                        </>
  )
}

export default Contact
