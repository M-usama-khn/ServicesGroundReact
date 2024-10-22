import React from 'react';
import {aboutmanagementteam} from '../constants';
import {MatiasStriccagnoliDirector} from '../assets'

const Aboutteammanagment = () => {
  return (
    <section id="section-management-team" className="section-management-team">
    <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="margin-bottom margin-large">
                    <div className="layout-centered">
                        <div data-w-id="15ac00af-d13f-be97-fb32-d447e35016ae" className="section-title">{aboutmanagementteam[0].title}</div>
                        <h2 data-w-id="15ac00af-d13f-be97-fb32-d447e35016b0">{aboutmanagementteam[0].heading}</h2>
                    </div>
                </div>
                <div data-w-id="15ac00af-d13f-be97-fb32-d447e35016b2" className="w-layout-grid management-cards-layout">
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016b3-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                                <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016bb-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                            <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016c3-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                            <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016cb-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                            <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016d3-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                            <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                    <div id="w-node-_15ac00af-d13f-be97-fb32-d447e35016db-4c74a0c8" className="management-card">
                        <div className="margin-bottom margin-small">
                            <div className="management-img-mask">
                            <img src={MatiasStriccagnoliDirector} />
                            </div>
                        </div>
                        <h3 className="text-color-light">{aboutmanagementteam[0].imagename1}</h3>
                        <div>{aboutmanagementteam[0].imagedescription1}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutteammanagment
