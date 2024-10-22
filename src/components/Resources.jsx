import React from 'react';
import {teamresources} from "../constants";
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Resources = (props) => {


    const {ref, inView} = useInView({
        threshold: 0
    });

    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    useEffect(() =>{
        if(inView){
        animation.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 ,bounce: 0
                
            }
        })
        animation2.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 ,bounce: 0
        }})
        animation3.start({
            y: 0,
            transition:{
                type: 'spring', duration: 1 , bounce: 0
                
            }
        })
     
     }
     if(!inView){
        animation.start({x: '-100vw'})
        animation2.start({x: '+100vw'})
        animation3.start({y: '+2000vh'})
     }
    
     } , [inView]
    
    
     )
    


    return (
        <section ref={ref} id="section-resources-to-add" 
        className="section-resources-to-add bg-dark"
         style={{overflow : "hidden"}}>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical_section">
                        <motion.div animate={animation3} className="layout-centered">
                            <div data-w-id="b063588d-bb51-2ae5-6b51-302fc656c607" className="section-title">{teamresources[0].title}</div>
                            <div className="margin-bottom margin-large">
                                <h2 data-w-id="b063588d-bb51-2ae5-6b51-302fc656c60a"><strong>{teamresources[0].heading}</strong></h2>
                            </div>
                            <div className="container-xsmall">
                                <p data-w-id="b063588d-bb51-2ae5-6b51-302fc656c60e" className="text-size-large text-color-light">
                                   {teamresources[0].pragraph}<br /> {teamresources[0].pragraph2}
                                </p>
                            </div>
                        </motion.div>
                        <div className="margin-top margin-xlarge">
                            <div className="w-layout-grid expertise_layout">
                                <motion.div animate={animation}>
                                <a id="w-node-b063588d-bb51-2ae5-6b51-302fc656c614-6174a0dd" href="/mobile-web-front-end-development" className="expertise_card-border w-inline-block">
                                    <div className="expertise_card">
                                        <div className="icon-lottie-2-colors" data-w-id="b063588d-bb51-2ae5-6b51-302fc656c616" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef7791f0a4ba35b22aa_1329-responsive-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="3.0166666666666666" data-duration="0"></div>
                                        <div className="margin-top margin-medium">
                                            <div className="text-align-center">
                                                <h3 className="text-color-light">{teamresources[0].subheading1}</h3>
                                            </div>
                                        </div>
                                        <div className="expertise_card-button">
                                            <div className="expertise_card-button_text">{teamresources[0].button1}</div>
                                        </div>
                                    </div>
                                </a>
                                </motion.div>
                                <motion.div animate={animation} id="w-node-b063588d-bb51-2ae5-6b51-302fc656c61e-6174a0dd" className="margin-top margin-medium margin-neg-expertise-card">
                                    <a id="w-node-b063588d-bb51-2ae5-6b51-302fc656c61f-6174a0dd" href="/backend-development" className="expertise_card-border w-inline-block">
                                        <div className="expertise_card-blue">
                                            <div className="icon-lottie-2-colors" data-w-id="b063588d-bb51-2ae5-6b51-302fc656c621" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef5bbbfc13ede63be12_749-interface-settings-outline.json" data-loop="1"
                                                data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.0166666666666666" data-duration="0"></div>
                                            <div className="margin-top margin-medium">
                                                <div className="text-align-center">
                                                    <h3 className="text-color-light">
                                                    {teamresources[0].subheading2} <br /> {teamresources[0].subheading_2}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="expertise_card-button">
                                                <div className="expertise_card-button_text">{teamresources[0].button2}</div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                                <motion.div animate={animation2}>
                                <a id="w-node-b063588d-bb51-2ae5-6b51-302fc656c62b-6174a0dd" href="/software-testing-and-qa" className="expertise_card-border w-inline-block">
                                    <div className="expertise_card">
                                        <div className="icon-lottie-2-colors" data-w-id="b063588d-bb51-2ae5-6b51-302fc656c62d" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef385742f033fa3edd3_457-shield-security-outline.json" data-loop="1"
                                            data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0.7916666666666666" data-duration="0"></div>
                                        <div className="margin-top margin-medium">
                                            <div className="text-align-center">
                                                <h3 className="text-color-light">
                                                {teamresources[0].subheading3}<br /> {teamresources[0].subheading_3}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="expertise_card-button">
                                            <div className="expertise_card-button_text">{teamresources[0].button3}</div>
                                        </div>
                                    </div>
                                </a>
                                </motion.div>
                                <motion.div animate={animation2} id="w-node-b063588d-bb51-2ae5-6b51-302fc656c637-6174a0dd" className="margin-top margin-medium margin-neg-expertise-card">
                                    <a id="w-node-b063588d-bb51-2ae5-6b51-302fc656c638-6174a0dd" href="/data-engineering" className="expertise_card-border w-inline-block">
                                        <div className="expertise_card-blue">
                                            <div className="icon-lottie-2-colors" data-w-id="b063588d-bb51-2ae5-6b51-302fc656c63a" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef7c23d6579612067ca_995-table-sheet-spreadsheet-outline.json" data-loop="1"
                                                data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.1" data-duration="0"></div>
                                            <div className="margin-top margin-medium">
                                                <div className="text-align-center">
                                                    <h3 className="text-color-light">
                                                    {teamresources[0].subheading4}<br /> {teamresources[0].subheading_4}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="expertise_card-button">
                                                <div className="expertise_card-button_text">{teamresources[0].button4}</div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources