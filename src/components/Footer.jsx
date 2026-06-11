import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h3>About</h3>
            <p>
              We are a group of 14 students from TS Academy, passionate about web
              development and design. Our mission is to create engaging and
              informative web experiences that educate users about our solar
              system through data visualization.
            </p>
          </div>

          <div className="footer-members">
            <h4>Our team members include:</h4>
           <div className="members-grid">
  <span><a href="https://github.com/Emi98nat/">Emmanuel</a></span>
  <span><a href="https://github.com/BashirSaka/RESPONSIVE-PROJECT-FLEXBOX.git">Bashir</a></span>
  <span><a href="https://github.com/Rebecca0-12">Sasere</a></span>
  <span><a href="https://github.com/mideakinmolayan">Akinmolayan</a></span>

  <span><a href="https://github.com/moddyoge-cloud">Modester</a></span>
  <span><a href="https://github.com/Orenyi">Otaru</a></span>
  <span><a href="https://github.com/Omobolanle27">Oriowo</a></span>
  <span><a href="https://github.com/akojenuserah">Akojenu</a></span>

  <span><a href="https://github.com/Adebola09">Adebola</a></span>
  <span><a href="https://github.com/Battleaxe-R">Asuquo</a></span>
  <span><a href="https://github.com/idowuoriyomi808-ai">Idowu</a></span>
  <span><a href="https://github.com/ogba07">Ogba</a></span>

  <span><a href="https://github.com/Favourh">Ajunwa</a></span>
  <span><a href="https://github.com/temmytorpe312-pixel">Mesole</a></span>
</div>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <div className="footer-left">
            <p>©2026 Design by<a href="https://amakandukwu.com/">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a></p>
            <p>Built by Group13. All rights reserved.</p>
          </div>

          <div className="footer-right"><a href="https://tsacademyonline.com/">TSAcademy</a></div>
        </div>
      </div>
    </footer>
  );
}