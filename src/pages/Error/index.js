import React, { useEffect } from "react";

import "./Error.css";

function Error() {
  useEffect(() => {
    document.title = "RN | 404";
  }, []);

  return (
    <div className="Error">
      <p>404</p>
    </div>
  );
}

export default Error;
