import React from 'react'
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const Frontendplatforms = () => {

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
    <section id="section-mobile-web-engineers" className="section-mobile-web-engineers" ref={ref} style={{overflow : "hidden"}}>
    <motion.div animate={animation} className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="margin-bottom margin-xlarge">
                    <div className="layout-centered">
                        <div data-w-id="95d7f21d-4b5c-b6f4-2354-a2cea01083fa" className="section-title">FRont end PLATFORMS</div>
                        <div className="container-xsmall">
                            <div className="margin-bottom margin-medium">
                                <h2 data-w-id="93554658-adbc-1817-d0bb-679d1e4b4cd2">Mobile &amp; Web Front End development platforms</h2>
                            </div>
                        </div>
                        <div className="container-xxsmall">
                            <p data-w-id="da469b40-b5da-bb19-0eac-bb87cdc9924b" className="text-size-large text-color-light">We can help you with the most used and current development platforms on the market.</p>
                        </div>
                    </div>
                </div>
                <div className="_3-columns-flex">
                    <div className="item_mobile-web-engineers">
                        <div className="margin-bottom margin-small">
                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c3aee293dada95f8d0b8ac_devlane-mobile-web-frontend-icon-native-mobile-app-development.svg" loading="lazy" alt="An icon of an apple device and an android device" />
                        </div>
                        <div className="margin-bottom margin-small">
                            <div className="container-xxxsmall">
                                <h3 className="text-color-light">Native Mobile App Development</h3>
                            </div>
                        </div>
                        <p>iOS or Android fully native engineers for those to want to give their users the smoothest experience possible.</p>
                    </div>
                    <div className="item_mobile-web-engineers less-padding_item_mobile-web-engineers">
                        <div className="margin-bottom margin-small">
                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c3aee29608b45eed427b74_devlane-mobile-web-frontend-icon-cross-platform-app-development.svg" loading="lazy" alt="An icon of an apple device and android device connected by the same experience"
                            />
                        </div>
                        <div className="margin-bottom margin-small">
                            <div className="container-xxxsmall">
                                <h3 className="text-color-light">Cross-Platform App Development</h3>
                            </div>
                        </div>
                        <div>
                            <p>For those who want to reach a broader mobile audience with a single codebase or want to deploy their initial development faster.</p>
                        </div>
                    </div>
                    <div className="item_mobile-web-engineers">
                        <div className="margin-bottom margin-small">
                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c3aee1349da34f10e00554_devlane-mobile-web-frontend-icon-progressive-web-app-development.svg" loading="lazy" alt="An icon of a mobile phone, a tablet and a computer screen" />
                        </div>
                        <div className="margin-bottom margin-small">
                            <div className="container-xxxsmall">
                                <h3 className="text-color-light">Progressive Web App Development</h3>
                            </div>
                        </div>
                        <p>For those who want to transmit their experience no matter the platform or device the consumer is on.</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
</section>
  )
}

export default Frontendplatforms
