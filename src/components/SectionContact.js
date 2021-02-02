import React, {Component} from 'react';

class SectionContact extends Component {    
  render() {        
    return (            
      <section className="page-section" id="Contact">                
        <div className="container-fluid">     
        <div class="row text-center text-white">
          <div class="col m-4">
            <h2 className="page-section-heading text-center text-uppercase mb-0 text-fn">SERVICES</h2>
              <div class="underline mb-4"></div>
            <p class="text-muted text-pd">We help clients with the full range of Investigations and Intelligence requirements, including:</p>
          </div>
        </div>  
        <div className="row my-5 ser">
          <div class="col-xs-4 col-sm-12 ">
            <ul className=" list col-12 row font-weight-bold">
              <li class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Asset trancing </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Corporate investigations </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Litigation and arbitration support </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Political risk and stakeholder analysis </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Corporate document retrieval </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Financial crime analysis </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i> Market intelligence </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i> Site visits </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Corporate intelligence </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Integrity due diligence </li>
              <li  class="col-lg-4 col-md-6 col-12">
              <i class="far fa-square" aria-hidden="true"></i>  Multilingual open source media and public records research </li>
            </ul>
         </div>
        </div>



        </div>           
      </section>        
        );    
  }}export default SectionContact;
