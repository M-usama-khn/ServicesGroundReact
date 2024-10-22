import React from "react";
import {teamreadycard , frontendreadycard , backendreadycard , testingreadycard , datareadycard , digitalready , webready
, advantage_mobile , emails_loyal_customers , digital_ready , application_quality , discovery_online , growth_social_media ,
design
} from "../constants"
import { Link } from "react-router-dom";
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const TeamReadytoteam = (props) => {
    const {ref, inView} = useInView({
        threshold: 0
    });
    const animation = useAnimation();
     useEffect(() =>{
     if(inView){
        animation.start({
            y: 0,
            transition:{
                type: 'spring', duration: 1 , bounce: 0
                
            }
        })
     }
     if(!inView){
        animation.start({y: '+2000vh'})
     }
    
     } , [inView]
    
    
     )
    



    return (
        <section ref={ref} id="section-next-steps" 
        className={`section-next-steps ${props.page == "homeherosection" ? "bg-dark" : props.page == "teamherosection" ? "bg-light" : ""}` }
        style={{overflow: "hidden" }}
        >
            <div className="page-padding">
                <div className="container-large mod_next-steps">
                    <div className="padding-vertical_section" style={{ background : "#16161A" }}>
                        <motion.div animate={animation} className="layout-centered">
                            <div data-w-id="b063588d-bb51-2ae5-6b51-302fc656c649" className="margin-bottom margin-large">
                                <h2 data-w-id="b063588d-bb51-2ae5-6b51-302fc656c64a"><strong>
                                    {
                                  
                                  props.page == "teamherosection"?

                                    teamreadycard[0].heading
                                    :
                                    props.page == "digitalherosection"?
                                    digitalready[0].title
                                    :
                                    props.page == "frontendherosection"?
                                    webready[0].title
                                    :
                                    props.page == "app" ? `${advantage_mobile[0].heading}`
                                    :
                                    props.page == "testing" ? `${application_quality[0].heading}`
                                    :
                                    props.page == "email" ? `${emails_loyal_customers[0].heading}`
                                    :
                                    props.page == "seo" ? `${discovery_online[0].heading}`
                                    :
                                    props.page == "uiux" ? `${design[0].heading}`
                                    :
                                    props.page == "media" ? `${growth_social_media[0].heading}`
                                    :
                                    ""
                                    
                                    }</strong></h2>
                            </div>
                            <div className="container-xsmall">
                                <p data-w-id="b063588d-bb51-2ae5-6b51-302fc656c64e" className="text-size-large text-color-light">
                                   {
                                        props.page == "teamherosection"?

                                        teamreadycard[0].pragraph
                                        :
                                        props.page == "digitalherosection"?
                                        digitalready[0].description1
                                        :
                                        props.page == "frontendherosection"?
                                        webready[0].description1
                                        :
                                        props.page == "app" ? `${advantage_mobile[0].pragraph}`
                                        :
                                        props.page == "testing" ? `${application_quality[0].pragraph}`
                                        :
                                        props.page == "email" ? `${emails_loyal_customers[0].pragraph}`
                                        :
                                        props.page == "seo" ? `${discovery_online[0].pragraph}`
                                        :
                                        props.page == "uiux" ? `${design[0].pragraph}`
                                        :
                                        props.page == "media" ? `${growth_social_media[0].pragraph}`
                                        :
                                        ""
                                  
                                   
                                   }<br /> {

                                    
                                    props.page == "teamherosection"?
                                   teamreadycard[0].pragraph1
                                   :
                                   props.page == "frontendherosection"?
                                   webready[0].description2
                                   :
                                   props.page == "app" ? `${advantage_mobile[0].pragraph1}`
                                    :
                                    props.page == "testing" ? `${application_quality[0].pragraph1}`
                                    :
                                    props.page == "email" ? `${emails_loyal_customers[0].pragraph1}`
                                    :
                                    props.page == "seo" ? `${discovery_online[0].pragraph1}`
                                    :
                                    props.page == "uiux" ? `${design[0].pragraph1}`
                                    :
                                    props.page == "media" ? `${growth_social_media[0].pragraph1}`
                                    :
                                    ""
                                   }
                                </p>
                            </div>
                            <div className="margin-top margin-medium"><Link to="/book-an-appointment" className="button w-button">{
                            props.page == "teamherosection"?

                            teamreadycard[0].button
                            :
                            props.page == "digitalherosection"?
                            digitalready[0].btntxt
                            :
                            props.page == "frontendherosection"?
                            webready[0].btntxt
                            :
                            digitalready[0].btntxt
                         
                            
                            }</Link></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamReadytoteam 