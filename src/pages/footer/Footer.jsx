import React from 'react';
import './Footer.css';


import 'boxicons/css/boxicons.min.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links_div' style={{display:'flex',flexDirection:'row',width:'300px',columnGap:'20px'}}>
            {/* <img src="ad" className="img" /> */}
            <img src='https://ncismindia.org/assets/img/NCISM%20LOGO.jpg' style={{width:'100px',height:'100px'}} alt="" />
           <div>
           <h4>NATIONAL COMMISSION FOR INDIAN SYSTEM OF MEDICINE</h4>

<h4>Jawahar Lal Nehru Bhartiya Chikitsa Avam Homoeopathy Anusandhan Bhawan, 61-65, Institutional Area, Janakpuri "D" Block, New Delhi-110058</h4>
           </div>
          </div>
          <div className='sb__footer-links_div'>
            <h4>Contact</h4>
            {/* <h4> phone</h4>
            <p>+91-11-2852 5464</p>

            <i class="fa-solid fa-phone">
              +91-11-2852 2519
            </i> */}
            <ui >
                  <i className="bx bxs-phone">
                     </i>
                     <span> Phone</span>
                     <h4>+91-11-2852 5464</h4>
                     <h4>+91-11-2852 2519</h4>
                  </ui>
                  {/* bx bxs-envelope */}
                  <ui>
                   <i className="bx bxs-envelope">
                   </i>
                     <span> Email</span>
                     <h4>secretary@ncismindia.org</h4>
                  </ui>


          </div>
          <div className="sb__footer-links_div">
            <h4>Quick Links</h4>
            <a href="/employer">
              <p>Introduction</p>
            </a>
            <a href="/employer">
              <p>Ayurveda</p>
            </a>
            <a href="/employer">
              <p>Siddha</p>
            </a>
            <a href="/employer">
              <p>Unani</p>
            </a>
          </div>
          <div className='sb__footer-links_div'>
            <h4></h4>
            <a href="/employer">
              <p>Acts & Amendments</p>
            </a>
            <a href="/employer">
              <p>Rules & Regulations</p>
            </a>
            <a href="/employer">
              <p>Annual Report</p>
            </a>
          </div >
          {/* <div className='sb__footer-links'>
           <h4>socialmedia</h4> 
           <div className='socialmedia'>
            <p><img src={fb} alt=""/></p>
            <p><img src={twitter} alt=""/></p>
            <p><img src={linkedin} alt=""/></p>
            <p><img src={insta} alt=""/></p>

           </div>
        </div> */}
        </div>
        <div><hr></hr></div>

        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>@{new Date().getFullYear()}CodeInn. All right reserved.</p>
          </div>
          {/* <div className='sb__footer-links'>
           {/* <h4>socialmedia</h4> 
        </div> */}
          <div className='sb__footer-below-links'>
            <div className='socialmedia'>
            
            <i className="fa fa-facebook socio"></i>
            <i className="fa fa-twitter socio"></i>
            <i className="fa fa-linkedin socio"></i>
              
              <i class="fa fa-instagram socio"></i>
              


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer