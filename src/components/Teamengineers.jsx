import React from "react";
import {teamengineers , carrierengineers} from "../constants"
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Teamengineers = (props) => {


  const {ref, inView} = useInView({
    threshold: 0.3
});
const animation = useAnimation();
const animation2 = useAnimation();
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
 }
 if(!inView){
    animation.start({x: '-100vw'})
    animation2.start({x: '+100vw'})
 }

 } , [inView]


 )


  return (
    <section ref= {ref}id="section-our-engineers" className="section-our-engineers bg-dark" style={{overflow : "hidden"}}>
      <div className="page-padding">
        <div className="container-large">
          <div className="padding-vertical_section">
            <div className="w-layout-grid expectations_layout-grid">
            
              <motion.div animate={animation}
                id="w-node-b063588d-bb51-2ae5-6b51-302fc656c585-6174a0dd"
                className="expectations_content"
              >
                <div className="section-title">{
                    props.page == "teamherosection" ? `${ teamengineers[0].title}`
                    :
                   `${ carrierengineers[0].title}`
                }</div>
                <h2>
                  {
                      props.page == "teamherosection" ? `${ teamengineers[0].heading}`
                      :
                     `${ carrierengineers[0].heading}`
                
                  
                  }</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-large text-color-light">
                    {
                       props.page == "teamherosection" ? `${ teamengineers[0].pragraph}`
                       :
                      `${ carrierengineers[0].pragraph}`
                 }</p>
                </div>
              </motion.div>
             
              <motion.div
              animate = {animation2}
                id="w-node-b063588d-bb51-2ae5-6b51-302fc656c58d-6174a0dd"
                className="expectations_vertical-margin"
              >
                <div
                  id="w-node-b063588d-bb51-2ae5-6b51-302fc656c58e-6174a0dd"
                  className="our-foundations_accordion"
                >
                  <div className="of_accordion-item_border">
                    <div
                      data-hover="true"
                      data-delay="0"
                      data-w-id="b063588d-bb51-2ae5-6b51-302fc656c590"
                      style={{width: "542.859px" , height: "112px"}}
                      className="of_accordion-item w-dropdown"
                    >
                      <div
                        className="of_accordion-toggle w-dropdown-toggle"
                        id="w-dropdown-toggle-1"
                        aria-controls="w-dropdown-list-1"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        role="button"
                        tabIndex="0"
                      >
                        <div
                          className="of_accordion-arrow w-icon-dropdown-toggle"
                          aria-hidden="true"
                        ></div>
                        <div className="of_accordion-toggle_icon-title">
                          <div
                            className="icon-lottie-2-colors"
                            data-w-id="b063588d-bb51-2ae5-6b51-302fc656c594"
                            data-animation-type="lottie"
                            data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef724682a8678ef38c2_1004-management-team-outline.json"
                            data-loop="1"
                            data-direction="1"
                            data-autoplay="1"
                            data-is-ix2-target="0"
                            data-renderer="svg"
                            data-default-duration="2.0166666666666666"
                            data-duration="0"
                          >
                            
                          </div>
                          <div className="margin-left margin-small">
                            <div className="text-size-large text-color-light">
                              <div className="of_accordion-title-text">
                                {
                                      props.page == "teamherosection" ? `${ teamengineers[0].subheading1}`
                                      :
                                     `${ carrierengineers[0].subheading1}`
                                
                                
                                }</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <nav
                        className="of-accordion-item_content w-dropdown-list"
                        id="w-dropdown-list-1"
                        aria-labelledby="w-dropdown-toggle-1"
                      >
                        <p>{
                          props.page == "teamherosection" ? `${ teamengineers[0].subpragraph1}`
                          :
                         `${ carrierengineers[0].subpragraph1}`
                  }</p>
                      </nav>
                    </div>
                  </div>
                  <div className="margin-top margin-small">
                    <div className="of_accordion-item_border">
                      <div
                        data-hover="true"
                        data-delay="0"
                        data-w-id="b063588d-bb51-2ae5-6b51-302fc656c59e"
                        style ={{width: "542.859px" , height: "112px"}}
                        className="of_accordion-item w-dropdown"
                      >
                        <div
                          className="of_accordion-toggle w-dropdown-toggle"
                          id="w-dropdown-toggle-2"
                          aria-controls="w-dropdown-list-2"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          role="button"
                          tabIndex="0"
                        >
                          <div
                            className="of_accordion-arrow w-icon-dropdown-toggle"
                            aria-hidden="true"
                          ></div>
                          <div className="of_accordion-toggle_icon-title">
                            <div
                              className="icon-lottie-2-colors"
                              data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5a2"
                              data-animation-type="lottie"
                              data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef2915f9541778e8f33_87-watch-outline.json"
                              data-loop="1"
                              data-direction="1"
                              data-autoplay="1"
                              data-is-ix2-target="0"
                              data-renderer="svg"
                              data-default-duration="2.0416666666666665"
                              data-duration="0"
                            >
                            




                            </div>
                            <div className="margin-left margin-small">
                              <div className="text-size-large text-color-light">
                                <div className="of_accordion-title-text">
                                  <strong>{

                                          props.page == "teamherosection" ? `${ teamengineers[0].subheading2}`
                                          :
                                          `${ carrierengineers[0].subheading2}`
                                 }</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav
                          className="of-accordion-item_content w-dropdown-list"
                          id="w-dropdown-list-2"
                          aria-labelledby="w-dropdown-toggle-2"
                        >
                          <p>
                            {
                               props.page == "teamherosection" ? `${ teamengineers[0].subpragraph2}`
                               :
                               `${ carrierengineers[0].subpragraph2}`
                     }</p>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="margin-top margin-small">
                    <div className="of_accordion-item_border">
                      <div
                        data-hover="true"
                        data-delay="0"
                        data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5ad"
                        style={{width: "542.859px" , height: "112px"}}
                        className="of_accordion-item w-dropdown"
                      >
                        <div
                          className="of_accordion-toggle w-dropdown-toggle"
                          id="w-dropdown-toggle-3"
                          aria-controls="w-dropdown-list-3"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          role="button"
                          tabIndex="0"
                        >
                          <div
                            className="of_accordion-arrow w-icon-dropdown-toggle"
                            aria-hidden="true"
                          ></div>
                          <div className="of_accordion-toggle_icon-title">
                            <div
                              className="icon-lottie-2-colors"
                              data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5b1"
                              data-animation-type="lottie"
                              data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef3910e0741ac513eb2_202-chat-outline.json"
                              data-loop="1"
                              data-direction="1"
                              data-autoplay="1"
                              data-is-ix2-target="0"
                              data-renderer="svg"
                              data-default-duration="1.4166666666666667"
                              data-duration="0"
                            >
                            </div>
                            <div className="margin-left margin-small">
                              <div className="text-size-large text-color-light">
                                <div className="of_accordion-title-text">
                                  <strong>
                                    {
                                          props.page == "teamherosection" ? `${ teamengineers[0].subheading3}`
                                          :
                                          `${ carrierengineers[0].subheading3}`
                                  
                                    
                                    }</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav
                          className="of-accordion-item_content w-dropdown-list"
                          id="w-dropdown-list-3"
                          aria-labelledby="w-dropdown-toggle-3"
                        >
                          <p>{
                               props.page == "teamherosection" ? `${ teamengineers[0].subpragraph3}`
                               :
                               `${ carrierengineers[0].subpragraph3}`
                        
                          
                          }</p>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="margin-top margin-small">
                    <div className="of_accordion-item_border">
                      <div
                        data-hover="true"
                        data-delay="0"
                        data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5bc"
                        style= {{width: "542.859px" , height: "112px"}}
                        className="of_accordion-item w-dropdown"
                      >
                        <div
                          className="of_accordion-toggle w-dropdown-toggle"
                          id="w-dropdown-toggle-4"
                          aria-controls="w-dropdown-list-4"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          role="button"
                          tabIndex="0"
                        >
                          <div
                            className="of_accordion-arrow w-icon-dropdown-toggle"
                            aria-hidden="true"
                          ></div>
                          <div className="of_accordion-toggle_icon-title">
                            <div
                              className="icon-lottie-2-colors"
                              data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5c0"
                              data-animation-type="lottie"
                              data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/62f50ef304e067826dda9767_743-multimedia-code-2-outline.json"
                              data-loop="1"
                              data-direction="1"
                              data-autoplay="1"
                              data-is-ix2-target="0"
                              data-renderer="svg"
                              data-default-duration="1.0166666666666666"
                              data-duration="0"
                            >
                            </div>
                            <div className="margin-left margin-small">
                              <div className="text-size-large text-color-light">
                                <div className="of_accordion-title-text">
                                  <strong>
                                    {
                                        props.page == "teamherosection" ? `${ teamengineers[0].subheading4}`
                                        :
                                        `${ carrierengineers[0].subheading4}`
                                  
                                    
                                    }</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <nav
                          className="of-accordion-item_content w-dropdown-list"
                          id="w-dropdown-list-4"
                          aria-labelledby="w-dropdown-toggle-4"
                        >
                          <p>{
                               props.page == "teamherosection" ? `${ teamengineers[0].subpragraph4}`
                               :
                               `${ carrierengineers[0].subpragraph4}`
                         
                          
                          }</p>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teamengineers;
