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
  <span>Emmanuel</span>
  <span>Bashir</span>
  <span>Sasere</span>
  <span>Akinmolayan</span>

  <span>Modester</span>
  <span>Otaru</span>
  <span>Oriowo</span>
  <span>Akojenu</span>

  <span>Adebola</span>
  <span>Asuquo</span>
  <span>Idowu</span>
  <span>Ogba</span>

  <span>Ajunwa</span>
  <span>Mesole</span>
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