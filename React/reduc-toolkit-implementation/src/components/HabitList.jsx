import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHabit, toggleHabit } from "../store/habit-slice";

const HabitList = () => {
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();

  const { habits } = useSelector((state) => state.habits);

  const getStreak = (habit) => {
    let streak = 0;

    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];

      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };
  return (
    <div className="flex flex-col items-center mt-3 justify-center">
      {habits.map((habit) => {
        return (
          <div
            key={habit.id}
            className="shadow-2xl mb-5 border-b-2 h-20 flex justify-around flex-row bg-gradient-to-b from-slate-300 to-slate-400 w-[35%] shadow-gray-400"
          >
            <div className="p-2 flex flex-col justify-center ">
              <p className="font-bold">{habit.name}</p>
              <p className="">{habit.frequency}</p>
              <p className="">Current Streak: {getStreak} days</p>
            </div>
            <div className="flex flex-row self-center">
              <button
                onClick={() =>
                  dispatch(toggleHabit({ id: habit.id, date: today }))
                }
                className={`cursor-pointer w-35 border-2 ${
                  !habit.completedDates.includes(today)
                    ? " border-blue-500 hover:border-blue-700 text-blue-400"
                    : "border-green-500 text-green-400 hover:border-green-900"
                }   h-12.5 font-bold px-1 py-1 rounded-full`}
              >
                {habit.completedDates.includes(today)
                  ? "Completed"
                  : "Mark Complete"}
              </button>
              <button
                onClick={() => dispatch(removeHabit({ id: habit.id }))}
                className="ml-2 w-35 border-2 border-red-600 text-red-500 cursor-pointer  h-12.5 font-bold px-1 py-1 rounded-full"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HabitList;
