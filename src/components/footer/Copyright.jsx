import React from "react";
import footer from "../footer/footer.css";

function Copyright() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>
        {/* <p>Built with ❤️ in California</p> */}
        <p>Copyright © {date} | All rights reserved.</p>
        <a href="https://github.com/scottdialo">
          <img
            src="github-mark.png"
            className="github-icon"
            Alt="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/scottdialo/">
        <img
            src="LI-Logo.png"
            className="linkedin-icon"
            Alt="linkedin-icon"
          />
         
        </a>
      </footer>
    </div>
  );
}

Copyright();

export default Copyright;
