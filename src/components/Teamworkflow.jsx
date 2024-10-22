import React from 'react';
import {OrginizationProcessMethoddiagram} from '../assets';
import {teamorganizationmodel} from '../constants'
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Teamworkflow = () => {

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
    <section ref= {ref}id="section-model" className="section-set-up-for-you bg-dark" style={{overflow : "hidden"}}><div className="page-padding">
    <motion.div animate={animation} className="container-large">
      
      <div className="padding-vertical_section">
        <div className="margin-bottom margin-xlarge"><div className="layout-centered">
            <div className="margin-bottom margin-large">
                <h2 data-w-id="b063588d-bb51-2ae5-6b51-302fc656c533">
                    <strong>{teamorganizationmodel[0].heading}</strong></h2></div><div className="container-xsmall">
                    <div className="margin-bottom margin-medium">
                        <p data-w-id="b063588d-bb51-2ae5-6b51-302fc656c538" className="text-size-large text-color-light">{teamorganizationmodel[0].pragraph}</p>
                        </div></div></div></div><div className="layout-centered">
                            <img src={OrginizationProcessMethoddiagram} loading="lazy"  alt="" />
</div>

</div>
</motion.div>

</div>

</section>
  )
}

export default Teamworkflow
