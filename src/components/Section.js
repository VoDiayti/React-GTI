import React, {Component} from 'react';
import logo1 from '../images/screen@2x.png';

class Section extends Component {
    render() {
        return (<>
            <div className="fullwidth_image abcd">
                <div className="heading-d">
                    <h2>The Global Investigations &amp; Intelligence Network</h2>
                </div>
                <div class="read">
                <a href="#About" class="btn-lead">Read More</a>
                </div>
                <div className="intro">
                    <img className="introoo" src={logo1} />
                </div>
            </div>
            
            <section className="page-section portfolio" id="About">
                <div className="container-fluid">
                    <div class="row text-center text-white">
                        <div class="col m-4">
                            <h2 className="page-section-heading text-center text-uppercase mb-0 text-fn">About</h2>
                            <div class="underline mb-4"></div>
                            <h5 className="lead-about">Ground Truth Gives You An Alternative To The Legacy Approach To Corporate Intelligence And Investigations.</h5>
                        </div>
                    </div>
                    <div className="row ab">
                        <div className="about-content col-md-6">
                            <p>Ground Truth provides an alternative to the legacy approach to Corporate Intelligence and Investigations. </p>
                            <p>For any intelligence or investigations requirement, we match you rapidly and directly to the best-fit practitioner, on-the-ground, anywhere in the world. We call them Network Partners.</p>
                            <p>This can be for a sensitive, strategic project where you need world-class insight and expertise, or a simple document retrieval from a public registry.</p>
                            <p>Network Partners could be seasoned independent investigators in London or New York, or someone with the right local knowledge and contacts in Bogota, Brussels, Manila or Mumbai. </p>
                            <p>Our online platform makes it very quick and easy for you to reach the best local resource and get going. </p>
                        </div>
                        <div className="about-content2 col-md-6">
                            <p>But don’t worry, the Ground Truth team is always there to help if you need us. Think of us as facilitators, helping you get the best from your Network Partner.</p>
                            <p>All the information goes through the platform, ensuring maximum data privacy and security. You can get detailed, formal reporting or raw, real-time intelligence. </p>
                            <p>We have over a thousand Network Partners — so no matter what your requirement is, and where in the world you need it from, we have the best-fit resource for you. The network is curated, invitation-only and all Network Partners are subject to thorough diligence, compliance and training procedures.</p>
                            <p>This new, transparent approach to gathering information gives you maximum control over the process. You know exactly who is getting the information and how they are doing it. No more mystery.</p>
                        </div>
                       
                        
                       
                        
                       
                       
                      
                        
                    </div>
                </div>
            </section>
        </>);
    }
}

export default Section;