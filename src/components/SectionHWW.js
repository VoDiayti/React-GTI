import React, {Component} from 'react';
import HWW1 from '../images/HWW-01.png'
import HWW2 from '../images/HWW-02.png'
import HWW3 from '../images/HWW-03.png'
import HWW4 from '../images/HWW-04.png'

class SectionHowwework extends Component {    
  render() {        
    return (            
      <section className="page-section bg-light text-white mb-0" id="HowWeWork">                
        <div className="container-fluid hwwm">     
        <div class="row text-center text-white">
          <div class="col m-4">
            <h2 className="page-section-heading text-center text-uppercase mb-0 text-fn">HOW we work</h2>
              <div class="underline mb-4"></div>
            <p class="text-light2 text-pd">Ground Truth is simple to use, and the process is familiar to anyone who commissions this type of work.</p>
          </div>
        </div>


          <div className="row row-item text-light2 ">
            <div className="col-md-6 col-sm-6 item-number">
              <div className="underline-left">
              </div>
              <div className="number"> 01 </div>
                <p className="fn-text font-weight-bold">Simply contact us with your requirement.</p>
            </div>
            <div className="col-md-6 col-sm-6 ">
              <img className="img-width-full" src={HWW1}></img>
            </div>
          </div>



          <div className="row row-item2 text-light2 ">
            <div className=" col-md-6 col-sm-6 item-number">
              <div className="underline-left">
              </div>
              <div className="number"> 02 </div>
                <p className="fn-text font-weight-bold">We review and assess it and propose a best-fit resource match.</p>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-6">
              <img src={HWW2}></img>
            </div>
          </div>


          <div className="row row-item text-light2 ">
            <div className="col-md-6 col-sm-6 item-number">

              <div className="underline-left">
              </div>
              <div className="number"> 03 </div>
                <p className="fn-text font-weight-bold">Once you are happy with the project plan and Network Partner, you are underway.</p>
            </div>
            <div className=" col-lg-6 col-md-5 col-sm-6">
              <img className="img-width-full" src={HWW3}></img>
            </div>
          </div>


          <div className="row row-item2 text-light2 ">
            <div className="col-md-6 col-sm-6 item-number">
              <div className="underline-left">
              </div>
              <div className="number"> 04 </div>
                <p className="fn-text font-weight-bold">You have unlimited access to the Network Partner throughout the assignment, via chat and voice call, and can review draft reporting throughout.</p>
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-6">
              <img src={HWW4}></img>
            </div>
          </div>

        <div className="endhww font-weight-bold">
          <h2>Once you’re happy with the work, all the material is yours.
          It’s that simple.
          </h2>
        </div>

        </div>           
      </section>        
        );    
  }}export default SectionHowwework;
