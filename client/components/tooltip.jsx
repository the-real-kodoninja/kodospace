import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      {children}
      {showTooltip && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;