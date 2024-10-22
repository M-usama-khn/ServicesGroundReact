import React from 'react';
import {aboutfact} from '../constants'
import Lottie from 'react-lottie';
import {years,
    A_growing_list_of_lon_gterm_customers,
    Headquartered_in_Pakistan,
    Mainly_North_American_European_clients,
    Providing_solutions,
    Team_comprising,} from "../assets"
const Aboutpartnership = () => {
  return (
    <section id="section-partnerships" className="section-quick-facts">
                <div className="page-padding">
                    <div className="container-medium">
                        <div className="padding-vertical_section">
                            <div className="margin-bottom margin-large">
                                <div className="layout-centered">
                                    <div data-w-id="15ac00af-d13f-be97-fb32-d447e350172f" className="section-title">{aboutfact[0].title}</div>
                                    <h2 data-w-id="15ac00af-d13f-be97-fb32-d447e3501731">{aboutfact[0].heading}</h2>
                                </div>
                            </div>
                            <div data-w-id="15ac00af-d13f-be97-fb32-d447e3501733" className="w-layout-grid quick-facts-layout">
                                <div className="quick-facts-card quick-facts-card-color-alternate">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="67762ad2-7f62-2724-4b08-1efb0c984822" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1df4c52f0b5be51d3f_469-flag-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.0416666666666665" data-duration="0">

                                              <img src = {years}/>
                                            </div>
                                   
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription1}</p>
                                </div>
                                <div className="quick-facts-card">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="5145f3e6-d22e-4dac-7b67-c6d66788c5eb" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1d553f41a83ce0d21a_1023-portfolio-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.9333333333333333" data-duration="0">
                                                    <img src = {Team_comprising}/>
                                            </div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription2}</p>
                                </div>
                                <div className="quick-facts-card quick-facts-card-color-alternate">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="8552cfc4-f21e-63c6-2227-40b34d581989" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1bb4a9e72a88719f7e_274-male-and-two-female-outline.json" data-loop="1"
                                            data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.5416666666666667" data-duration="0">
                                                 <img src = {Providing_solutions}/>
                                            </div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription3}</p>
                                </div>
                                <div className="quick-facts-card">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="0edd2857-a328-67c1-6dda-81cdb0c735de" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1b7c606308bc2e60e0_40-gears-settings-double-outline.json" data-loop="1"
                                            data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.0416666666666667" data-duration="0">
                                                     <img src = {A_growing_list_of_lon_gterm_customers}/>
                                            </div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription4}</p>
                                </div>
                                <div className="quick-facts-card">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="b7cf2ef4-1bc6-50c7-9c74-2893c8e99620" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1b8ebd85ca1f940cc5_186-puzzle-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0.51" data-duration="0">
                                                 <img src = {Mainly_North_American_European_clients}/>
                                            </div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription5}</p>
                                </div>
                                <div className="quick-facts-card quick-facts-card-color-alternate">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="c9db5ed5-85d3-bdbe-8b80-aeb3e10009b4" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1dea4fb978ada65ded_735-world-globe-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.0166666666666666" data-duration="0">
                                                      <img src = {Headquartered_in_Pakistan}/>
                                            </div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription6}</p>
                                </div>
                                {/* <div className="quick-facts-card">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="6146cd2d-bc54-80bd-0f84-88b897a6fd1e" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1b58388645ad451dda_53-location-pin-on-round-map-outline.json" data-loop="1"
                                            data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.1666666666666667" data-duration="0"></div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription7}</p>
                                </div>
                                <div className="quick-facts-card quick-facts-card-color-alternate">
                                    <div className="margin-bottom margin-small">
                                        <div className="lottie-animation lottie-top-icon" data-w-id="3eba98e5-446e-d387-71a6-ed10c7e72f44" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/63122c1d03e4f3d991dcd359_484-two-buildings-outline.json" data-loop="1" data-direction="1"
                                            data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.0416666666666665" data-duration="0"></div>
                                    </div>
                                    <p className="quick-facts-text">{aboutfact[0].carddescription8}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Aboutpartnership
