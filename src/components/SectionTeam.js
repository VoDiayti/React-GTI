import React, {Component} from 'react';
import img1 from '../images/stewart.6734c13e0eb6.png'
import img2 from '../images/patrick.75c43a15a71d.png'
import img3 from '../images/zac.534a2b5f2be7.png'
import img4 from '../images/matt.b1c1a8392428.png'
import img5 from '../images/silvia.1356d3e16610.png'
import img6 from '../images/robert.28482e3da238.png'
import img8 from '../images/colin.fdb909f5d108.png'
import img7 from '../images/silvia.1356d3e16610.png'

class SectionTeam extends Component {    
  render() {        
    return (            
      <section className="page-section text-white mb-0" id="Team">                
        <div className="container-fluid ">     
          <div class="row text-center  text-white">
            <div class="col m-4 py-5">
              <h2 className="page-section-heading text-center text-uppercase mb-0 text-fn">our Team</h2>
                <div class="underline mb-4"></div>
            </div>
          </div>

          <div className="team-list row">
          <div class="team_item col-md-3 col-sm-6">
            	<div class="team-team">
            	    <div class="team_img">
            			<img src={img1} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Stewart Kelly</h4>
                		<p class="certifications"> Founder &amp; CEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>
          
          <div class="team_item col-md-3 col-sm-6">
            	<div class="team-team ">
            	    <div class="team_img">
            			<img src={img2} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Patrick Carter</h4>
                		<p class="certifications"> Cofounder &amp; CTO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in " aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6">
            	<div class="team-team ">
            	    <div class="team_img">
            			<img src={img3} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Zachary Brech</h4>
                		<p class="certifications"> FEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6">
            	<div class="team-team ">
            	    <div class="team_img">
            			<img src={img4} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Matthew Hunt</h4>
                		<p class="certifications"> Operations Lead</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6 py-3">
            	<div class="team-team">
            	    <div class="team_img">
            			<img src={img5} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Stewart Kelly</h4>
                		<p class="certifications"> Founder &amp; CEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6 py-3">
            	<div class="team-team">
            	    <div class="team_img">
            			<img src={img6} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Stewart Kelly</h4>
                		<p class="certifications"> Founder &amp; CEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6 py-3">
            	<div class="team-team">
            	    <div class="team_img">
            			<img src={img7} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Stewart Kelly</h4>
                		<p class="certifications"> Founder &amp; CEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>

          <div class="team_item col-md-3 col-sm-6 py-3">
            	<div class="team-team">
            	    <div class="team_img">
            			<img src={img8} alt="Stewart Kelly"/>
                	<div class="team-caption">
                		<h4>Stewart Kelly</h4>
                		<p class="certifications"> Founder &amp; CEO</p>
                	</div>
                	<ul>
                		<li><a class="linkedin" target="_blank" href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>    
                  </ul>
                </div>
            </div>
          </div>
          </div>
        </div>           
      </section>        
    );    
  }}export default SectionTeam;

