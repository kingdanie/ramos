import React from "react";

const UpArrow = () => (
  <svg
    fill="#ffffff"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="up-arrow"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line" // Changed 'class' to 'className'
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> {/* Changed 'stroke-width' to 'strokeWidth' */}
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round" // Changed 'stroke-linecap' to 'strokeLinecap'
      strokeLinejoin="round" // Changed 'stroke-linejoin' to 'strokeLinejoin'
    ></g>
    <g id="SVGRepo_iconCarrier">
      <line
        id="primary"
        x1="12"
        y1="21"
        x2="12"
        y2="3"
        style={{ fill: "none", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }} // Converted style attributes to object format
      ></line>
      <polyline
        id="primary-2"
        data-name="primary"
        points="15 6 12 3 9 6"
        style={{ fill: "none", stroke: "#ffffff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2 }} // Converted style attributes to object format
      ></polyline>
    </g>
  </svg>
);

export default UpArrow;
