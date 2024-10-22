import React from 'react';
import {aboutbriefstory} from "../constants";
import {aboutsg} from "../assets"
const Aboutbreifstory = () => {
  return (
    <section id="section-brand-story" className="section-brand-story">
    <div className="page-padding">
        <div className="container-medium">
            <div className="padding-vertical_section">
                <div className="margin-bottom margin-large">
                    <div className="layout-centered">
                        <div data-w-id="15ac00af-d13f-be97-fb32-d447e3501695" className="section-title">{aboutbriefstory[0].title}</div>
                        <h2 data-w-id="15ac00af-d13f-be97-fb32-d447e3501697">{aboutbriefstory[0].heading}</h2>
                    </div>
                </div>
                <div data-w-id="15ac00af-d13f-be97-fb32-d447e3501699"  className="w-layout-grid brand-story-layout">
                    <img src={aboutsg} loading="lazy" id="w-node-_15ac00af-d13f-be97-fb32-d447e350169a-4c74a0c8" alt="Devlane brand logo outlined" />
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e350169b-4c74a0c8" className="brand-story-text-layout">
                        <p>{aboutbriefstory[0].heading}<br /><br />{aboutbriefstory[0].pragraph1}<br /><br />{aboutbriefstory[0].pragraph2}<br /><br />{aboutbriefstory[0].pragraph3}<br /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutbreifstory
