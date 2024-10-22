import React from 'react';
import {contact} from "../constants";
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
                                                    
                                                        <p className="testimonials-paragraph mb-24">{contact[0].slidepragraph1}</p>
                                                   
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
      <SwiperSlide>    <div className="margin-top margin-medium slide-box">
                                                    
                                                    <p className="testimonials-paragraph mb-24">{contact[0].slidepragraph2}</p>
                                               
                                                    <div className="testimonial-author_component slide-author">
                                                        {/* <div className="testimonial-author-photo">
                                                            <img
                                                                src={jason}
                                                                loading="lazy"
                                                                alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                                                            />
                                                        </div> */}
                                                        <div className=" margin-small slide-box-child">
                                                            <div className="testimonial-author-name slide-author-name">{contact[0].slidename2}</div>
                                                         
                                                        </div>
                                                    </div>
                                                </div></SwiperSlide>
      
    
    <SwiperSlide>    <div className="margin-top margin-medium slide-box">
                                                    
                                                    <p className="testimonials-paragraph mb-24">{contact[0].slidepragraph3}</p>
                                               
                                                    <div className="testimonial-author_component slide-author">
                                                        {/* <div className="testimonial-author-photo">
                                                            <img
                                                                src={jason}
                                                                loading="lazy"
                                                                alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                                                            />
                                                        </div> */}
                                                        <div className=" margin-small slide-box-child">
                                                            <div className="testimonial-author-name slide-author-name">{contact[0].slidename3}</div>
                                                         
                                                        </div>
                                                    </div>
                                                </div></SwiperSlide>
                                               
      
                                                 </Swiper>
                                                  </section>
                                             </div>
                                            </div>
                                      
                                      
                                        <div id="w-node-fb3ac194-9ec9-8d97-0778-85c2a36b880b-a36b87bd" data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b880b" className="contact_form w-form">
                                            <form id="email-form" name="email-form" data-name="Email Form"  onSubmit={sendEmail} >
                                                <label htmlFor="select-subject-2" className="form-labels">Subject</label>
                                                <select id="select-subject-2" name="select-subject-2" required="" data-name="Select Subject 2" className="form-fields w-select">
                                                    <option value="">Select one...</option>
                                                    <option value="Web Development" selected>Web Development</option>
                                                    <option value="Mobile App Development">Mobile App Development</option>
                                                    <option value="Quality Assurance Services">Quality Assurance Services</option>
                                                    <option value="Email Marketing">Email Marketing</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="SEO">SEO</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="UI UX">UI & UX Design</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label htmlFor="FULLNAME-2" className="form-labels">{contact[0].contactformname}</label>
                                                <input type="text" className="form-fields w-input" maxLength="256" name="FULLNAME-2" data-name="FULLNAME 2" placeholder="" id="FULLNAME-2" required="required" />
                                                <label htmlFor="email-2" className="form-labels">{contact[0].contactformemail}</label>
                                                <input type="email" className="form-fields w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required="required" /><label htmlFor="Phone-3" className="form-labels">{contact[0].contactformphone}</label>
                                                <input type="tel" className="form-fields w-input" maxLength="256" name="Phone-3" data-name="Phone 3" placeholder="" id="Phone-3" required="required"  /><label htmlFor="Message-2" className="form-labels">{contact[0].contactformmessage}</label>
                                                <input type="text" className="form-fields w-input" style = {{display: "none"}} onChange={checkbot}/>
                                                <textarea placeholder="Write your message here..." maxLength="5000" id="Message-2" name="Message-2" data-name="Message 2" required="required" className="form-fields is-text-area w-input"></textarea>
                                                <input
                                                    type="submit"
                                                    value="Send Message"
                                                    data-wait="Please wait..."
                                                    id="Submission-1"
                                                    className="button w-button"
                                                    // disabled={bot == 1 ? "disale" : "none"} 
                                                    disabled={bot} 
                                                />
                                                
                                            </form>
                                            <div className = "row" style = {{margin: "20px 0px 0px 0px"}}>
                                                 {result? "Thank you for contacting us, we will get back to you as soon as possible." :
                                                   "" } </div>
                                            <div className="w-form-done">
                                                <div>Thank you for contacting us, we will get back to you as soon as possible.</div>
                                            </div>
                                            <div className="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
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
