import React, {Component} from 'react';
import img1 from '../images/TRANSPARENCY.png';
import img2 from '../images/cost effective.png';
import img3 from '../images/control-1.png';
import img4 from '../images/transparent.png';
import img5 from '../images/security.png';
import img6 from '../images/compliant.png';




class SectionAbout extends Component {
    render() {
        return (
            <section className="page-section bg-light text-white mb-0" id="WhyUs">
                <div className="container-fluid">
                    <div class="row text-center text-white">
                        <div class="col m-4">
                            <h2 className="page-section-heading text-center text-uppercase mb-0 text-fn">Why Us</h2>
                            <div class="underline mb-4"></div>
                        </div>
                    </div>
                    <div className="wu">
                        <div className="row my-5">
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img1}/></i>
                                <h2 class="text-body mb-3">AGILE</h2>
                                <p class="text-muted text-pd">Rapid and easy access to the right resource</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img3}/></i>
                                <h2 class="text-body mb-3">CONTROL</h2>
                                <p class="text-muted text-pd">No more layers of analysts and paperwork getting between you and the ground truth. You are in control throughout.</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img4}/></i>
                                <h2 class="text-body mb-3">TRANSPARENT</h2>
                                <p class="text-muted text-pd">If there’s no need for mystery, why have it? Ground Truth takes all the unnecessary opacity away.</p>
                            </div>
                        </div>               
                        <div className="row my-5">
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img2}/></i>
                                    <h2 class="text-body mb-3">COST-EFFECTIVE</h2>
                                <p class="text-muted text-pd">No more excess middleman mark-ups, so we can pass the savings onto you. You pay only for intelligence and access - with clear and transparent pricing.</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img5}/></i>
                                    <h2 class="text-body mb-3">SECURE</h2>
                                <p class="text-muted text-pd">Our online platform makes it easy to manage sensitive data and ensure its privacy and security at every step.</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <i class="mb-4"> <img src={img6}/></i>
                                    <h2 class="text-body mb-3">COMPLIANT</h2>
                                <p class="text-muted text-pd">Without all the layers of mystery, it’s much easier to ensure full compliance with legal and ethical standards — in your home jurisdiction and where the enquiries are carried out.</p>
                            </div>
                        </div>   
                    </div>            
                </div>
            </section>
        );
    }
}

export default SectionAbout;