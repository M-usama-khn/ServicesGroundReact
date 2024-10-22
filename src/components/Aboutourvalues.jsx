import React from 'react'
import {aboutvalues} from '../constants'
import {

    constantly_testing_limits_v,
relishing_every_moment_v,
surpassing_expectations_v,
taking_on_new_challenges_v,
unearthing_new_approaches_v,
core_values_arrow,
} from "../assets"
const Aboutourvalues = () => {
  return (
      
    <section id="section-why-devlane" className="section-values">
    <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="w-layout-grid layout-values">
                    <div className="layout-values-text">
                        <div data-w-id="15ac00af-d13f-be97-fb32-d447e35016e9" className="section-title">{aboutvalues[0].title}</div>
                        <h2 data-w-id="15ac00af-d13f-be97-fb32-d447e35016eb">{aboutvalues[0].heading}</h2>
                    </div>
                  
                
                    <div loading="lazy" data-w-id="15ac00af-d13f-be97-fb32-d447e35016ed" id="w-node-_15ac00af-d13f-be97-fb32-d447e35016ed-4c74a0c8"
                       
                      alt="An arrow pointing right" className="values-image-arrow"> <img src={core_values_arrow}/></div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016ee-4c74a0c8" className="w-layout-grid layout-values-items">
                        <div className="values-item">
                            <div 
                            className="icon-lottie-about icon-lottie-about-1" data-w-id="beff391b-e565-1b12-7620-6494c68daf40" data-animation-type="lottie" data-src="" data-loop="1"
                                
                                data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.4" data-duration="0">
                                  <img className = "core-values-img1" src={surpassing_expectations_v} />
                                </div>
                             <div className="margin-left margin-small">
                                <h3 className="text-color-light">{aboutvalues[0].title1}</h3>
                                <div className="margin-top margin-xsmall">
                                    <p>{aboutvalues[0].description1}</p>
                                </div>
                            </div>
                        </div>
                        <div className="margin-left margin-huge margin-remove">
                            <div className="values-item">
                                <div className="icon-lottie-about icon-lottie-about-2" data-w-id="005b32ec-f4e8-b3bb-f4f5-1d4d3c91f783" data-animation-type="lottie" data-src="" data-loop="1" data-direction="1"
                                    data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.0416666666666667" data-duration="0">
                                         <img  className = "core-values-img2" src={relishing_every_moment_v} />
                                    </div>
                                <div className="margin-left margin-small">
                                    <h3 className="text-color-light"><strong>{aboutvalues[0].title2}</strong></h3>
                                    <div className="margin-top margin-xsmall">
                                        <p>{aboutvalues[0].description2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-left margin-xxhuge margin-remove">
                            <div className="values-item">
                                <div className="icon-lottie-about icon-lottie-about-3" data-w-id="4a7fe2ce-be47-5aac-e73d-485a9588d1d6" data-animation-type="lottie" data-src="" data-loop="1" data-direction="1"
                                    data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.1666666666666667" data-duration="0">
                                          <img  className = "core-values-img3" src={constantly_testing_limits_v} />
                                    </div>
                                <div className="margin-left margin-small">
                                    <h3 className="text-color-light">{aboutvalues[0].title3} </h3>
                                    <div className="margin-top margin-xsmall">
                                        <p>{aboutvalues[0].description3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-left margin-huge margin-remove">
                            <div className="values-item">
                                <div className="icon-lottie-about icon-lottie-about-4" data-w-id="5601b19a-d4c8-b1ec-092b-2ebfcb2353b8" data-animation-type="lottie" data-src="" data-loop="1"
                                    data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="1.5416666666666667" data-duration="0">
                                          <img  className = "core-values-img4" src={taking_on_new_challenges_v} />
                                    </div>
                                <div className="margin-left margin-small">
                                    <h3 className="text-color-light">{aboutvalues[0].title4}</h3>
                                    <div className="margin-top margin-xsmall">
                                        <p>{aboutvalues[0].description4}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="values-item">
                            <div className="icon-lottie-about icon-lottie-about-5" data-w-id="7cb9cedd-7d7b-b4f3-d8b2-2e494ac9bbee" data-animation-type="lottie" data-src="" data-loop="1" data-direction="1"
                                data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0.875" data-duration="0" style ={{position: "relative"}}>

                           <img style={{position:"absolute"}}  className = "core-values-img5"src={unearthing_new_approaches_v} />
                                </div>
                            <div className="margin-left margin-small">
                                <h3 className="text-color-light">{aboutvalues[0].title5}</h3>
                                <div className="margin-top margin-xsmall">
                                    <p>{aboutvalues[0].description5}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutourvalues
