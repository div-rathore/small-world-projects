import React from "react";

const suggestionsList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlight = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`,"gi"))
    return (
        <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    )
  };
  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
          >
            {getHighlight(currSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default suggestionsList;
