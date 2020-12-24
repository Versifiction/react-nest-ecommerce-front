import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading() {
  return (
    <div className="Loading">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
}

export default Loading;
