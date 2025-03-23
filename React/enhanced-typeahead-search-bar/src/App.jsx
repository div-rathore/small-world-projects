import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";

function App() {
  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
  };

  //   const staticData = [
  //   "apple",
  //   "banana",
  //   "berrl",
  //   "orange",
  //   "grape",
  //   "mango",
  //   "melon",
  //   "berry",
  //   "peach",
  //   "cherry",
  //   "plum",
  // ];

  return (
    <>
      <h1>Typeahead</h1>
      <Autocomplete
        placeholder={"Enter keyword"}
        staticData={''}
        fetchSuggestions={fetchSuggestions}
        dataKey={"name"}
        customLoading={<>Loading ...</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => {}}
        onBlur={(e) => {}}
        onFocus={(e) => {}}
        customStyles={{}}
      />
    </>
  );
}

export default App;
