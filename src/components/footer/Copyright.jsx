import React from "react";
import footer from "../footer/footer.css";

function Copyright() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>
        {/* <p>Built with ❤️ in California</p> */}
        <p>Copyright © {date} | All rights reserved.</p>
      </footer>
    </div>
  );
}

Copyright();

export default Copyright;
