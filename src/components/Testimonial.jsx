import React from 'react';
import { contact } from '../constants';
import { georgecollado, jason, joshRhoades, lukasSliwka } from '../assets';
const Testimonial = (props) => {
  return (
    <section id="section-contact"
    className={`section-contact ${props.page == "homeherosection" ? "bg-dark":""}` } 
    >
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical_section">
                    <div className="text-center">
                        <div className="testimonials-content">
                            <div data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c3" className="section-title">Reach out to us</div>
                            <h2 data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c5" className='mb-20'>LET’S GET CONNECTED</h2>
                            <div><p data-w-id="fb3ac194-9ec9-8d97-0778-85c2a36b87c8" className="text-size-large text-color-light">Fill out the details on the right & one of our representatives will contact you soon.</p></div>
                        </div>
                        <div className="testimonials-slider w-slider" >
                            <div className="w-slider-mask">
                                <div className="w-slide">
                                    <p className="testimonials-paragraph">{contact[0].slidepragraph1}</p>
                                    <div className="margin-top margin-medium">
                                        <div className="testimonial-author_component">
                                            <div className="testimonial-author-photo">
                                                <img
                                                    src={georgecollado}
                                                    loading="lazy"
                                                    alt="Photo of Lukas Sliwka who is the Former CTO at Grindr"
                                                />
                                            </div>
                                            <div className="margin-left margin-small">
                                                <div className="testimonial-author-name">{contact[0].slidename1}</div>
                                                <div className="testimonial-author-position">{contact[0].nameheading1}<span className="position-span">{contact[0].nameheading1_1}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-slide">
                                    <p className="testimonials-paragraph">{contact[0].slidepragraph2}</p>
                                    <div className="margin-top margin-medium">
                                        <div className="testimonial-author_component">
                                            <div className="testimonial-author-photo">
                                                <img
                                                    src={jason}
                                                    loading="lazy"
                                                    alt="Photo of Jason Jea who is the Director of Data Science &amp; Analytics at Everlane"
                                                />
                                            </div>
                                            <div className="margin-left margin-small">
                                                <div className="testimonial-author-name">{contact[0].slidename2}</div>
                                                <div className="testimonial-author-position">{contact[0].nameheading2} <span className="position-span"> {contact[0].nameheading2_2}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-slide">
                                    <p className="testimonials-paragraph">{contact[0].slidepragraph3}</p>
                                    <div className="margin-top margin-medium">
                                        <div className="testimonial-author_component">
                                            <div className="testimonial-author-photo">
                                                <img
                                                    src={joshRhoades}
                                                    loading="lazy"
                                                    alt="Photo of Josh Rhoades who is the SVP Of Engineering at Appetize"
                                                />
                                            </div>
                                            <div className="margin-left margin-small">
                                                <div className="testimonial-author-name">{contact[0].slidename3}</div>
                                                <div className="testimonial-author-position">{contact[0].nameheading3}<span className="position-span"> {contact[0].nameheading3_3}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-slider-arrow-left"><div className="testimonials-icon-arrow w-icon-slider-left"></div></div>
                            <div className="w-slider-arrow-right"><div className="testimonials-icon-arrow w-icon-slider-right"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
