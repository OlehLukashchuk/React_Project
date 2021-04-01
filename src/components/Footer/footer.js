import React from 'react';
import '../Footer/footer.css';

function Footer(){
  return  (
    <footer>
      <div className="footLeft">
        <p>Copyright © 2019-2021 <a href="https://themesberg.com/" target="_blank">Themesberg</a> </p>
      </div>
      <div className="footRight">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Themes</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="footerSettings">
        <span>Settings</span>
      </div>
    </footer>
  )
}


export default Footer;