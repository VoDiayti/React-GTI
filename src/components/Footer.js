import React, {Component}  from 'react';
import footerimage from '../images/GTI_Logo_Light@2x.png'

class SectionContact extends Component {
    render() {
        return (
           <footer id="Contact" className="footer-cu">
               <div className="container-fluid p-0">
                   <div className="contactus">
                        <div className="ctus">
                            <h1 className="page-section-heading text-center text-uppercase mb-0 text-fn text-light pb-5">contact us</h1>
                            <h5 className="text-center text-light">To discuss a requirement or to find out more about Ground Truth Intelligence, please contact us directly at </h5>
                            <a className="mail" href="mailto:info@gtintel.io">info@gtintel.io</a>
                        </div>

                        <div className="endfooter">
                            <div className="footer-logo pb-3">
                            <img src={footerimage} alt="image" />
                            </div>
                            <div class="">
                                <p> Coppyright &copy; Ground Truth Holdings Limited 2019. All rights reserved.</p>
                            </div>
                            <h4 className="text-footer pb-2">Privacy Policy</h4>
                            <div className="aaa">
                		        <a class="linke" target="_blank" href="#"><i class="fab fa-linkedin-in " aria-hidden="true"></i></a>
                            </div>
                        </div>
                   </div>
               </div>
           </footer>
        );
    }
}

export default SectionContact;
