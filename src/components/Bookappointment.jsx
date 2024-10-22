import React from 'react'
import { InlineWidget } from "react-calendly";
const Bookappointment = () => {
  return (
    <>
    {/* <div className = "appointment">
    <h1 className = "layout-centered appointment-heading">BOOK AN APPOINTMENT WITH US</h1>
    </div>
    <div>
      <InlineWidget url="https://calendly.com/servicesground/book-appointment?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1b1c20&text_color=ffffff&primary_color=f1c706" styles={{height: '700px'}} />
      </div> */}



<div className="section-header">
    <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="w-layout-grid microsite_hero_layout appointment-res">
                    <div className="header-content appointment-header" >
                        <h1>
                            BOOK AN APPOINTMENT
                        </h1>
                        <div className="margin-top margin-medium">
                          <p className="text-size-large text-color-light">
                          Thank you for your interest in Services Ground.
                                   <br/>
                        Please join us for a brief discussion so we may get acquainted with your organization, understand your requirements and/or answer any questions you might have.
                            </p>
                            </div>
                            {/* <div className="margin-top margin-medium">
                                <a href="#section-contact" data-w-id="697dde0e-39ce-7e31-2f75-4bde5931dc66" class="button w-button">Get Free Consultation</a>
                                </div> */}
                                </div>
                               
                                <div style={{}}>
                                    {/* <img src="/src/assets/web_development.png" loading="lazy" alt="An illustration showin 3 devices, one cellphone, one tablet and one Macbook. Inside: a responsive app. Under the hood code is shown."/> */}
                                    <InlineWidget url="https://calendly.com/servicesground/book-appointment?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1b1c20&text_color=ffffff&primary_color=f1c706" styles={{height: '603px' , border: "1px solid #4e4e4e"}} />

                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>



    </>
   )
   
   


}

export default Bookappointment
