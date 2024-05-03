import React, {useState} from "react";

const Tooltip = ({text, isVisible, children}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative inline-block">
          <div
            className="inline-block cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {children}
          </div>
          {showTooltip && isVisible && (
            <div
              className="absolute bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
              style={{ top: '-2rem', left: '50%', transform: 'translateX(-50%)'}}
            >
              {text}
            </div>
          )}
        </div>
      );
}

export default Tooltip;