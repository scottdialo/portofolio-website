import React from "react";

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
            alt="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/scottdialo/">
          <img
            src="LI-Logo.png"
            className="linkedin-icon"
            alt="linkedin-icon"
          />
        </a>
      </footer>
    </div>
  );
}

Copyright();

export default Copyright;
