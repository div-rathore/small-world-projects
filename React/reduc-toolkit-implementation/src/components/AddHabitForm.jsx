import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../store/habit-slice";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  // const {habits} = useSelector((state)=> state.habits)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );
      setName("");
      // console.log(habits);
      
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-3 justify-center"
    >
      <div className=" relative mt-6 w-2xl">
        <input
          type="text"
          name="habitName"
          className="peer w-full border-b placeholder:text-transparent h-15 mt-2"
          placeholder="Habit name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="habitName"
          className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-lg duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-lg"
        >
          Habit Name
        </label>
      </div>
      <div className=" relative mt-6 w-2xl">
        <select
          name="frequency"
          defaultValue={"trash"}
          onChange={(e) => setFrequency(e.target.value)}
          className="peer w-full border-b placeholder:text-transparent h-10"
        >
          <option value="trash" disabled>
            Select Frequency
          </option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <button
        type="submit"
        className="cursor-pointer mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {" "}
        Add Habit
      </button>
    </form>
  );
};

export default AddHabitForm;
