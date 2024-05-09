import React from "react";

export const LoadingIcon = () => (
  <svg
    version="1.1"
    viewBox="0 0 100 100"
    width="100px"
    height="100px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle className="ball" cx="45" cy="35" r="12" fill="#cbe0fb">
      <animate
        attributeName="cy"
        values="65;30;65"
        dur="1.5s"
        begin="0.75s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      className="ball"
      cx="50"
      cy="65"
      r="12"
      fill="none"
      stroke="#053e85"
      strokeWidth="2"
    >
      <animate
        attributeName="cy"
        values="65;30;65"
        dur="1s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
