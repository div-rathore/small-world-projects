import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";
import SuggestionsList from "./SuggestionsList";
import debounce from 'loadash/debounce'

const Autocomplete = ({
  placeholder,
  staticData,
  fetchSuggestions,
  dataKey,
  customLoading,
  onSelect,
  onChange,
  onBlur,
  onFocus,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(suggestions);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);

    try {
      let result;
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (e) {
      setError(e.message);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestionsDebounced = useCallback(debounce(getSuggestions, 400),[])
  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey? suggestion[dataKey]:dataKey)
    onSelect(suggestion)
    setSuggestions([])
  };
  useEffect(() => {
    if (inputValue.length) {
        getSuggestionsDebounced(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);
  return (
    <div className="container">
      <input
        type="text"
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {(suggestions.length > 0 || loading || error) && (
        <ul>
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">{customLoading}</div>}

          <SuggestionsList
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
