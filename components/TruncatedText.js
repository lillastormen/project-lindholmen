import React, { useState } from "react";

const TruncatedText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div>
      <p>{isExpanded ? text : truncatedText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleExpansion}
          className="bg-black text-white p-2 my-2 rounded-[10px] text-sm"
        >
          {isExpanded ? "Läs mindre" : "Läs mer"}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
