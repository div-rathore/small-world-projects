import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../store/habit-slice";

const HabitStats = () => {
  const { habits, isLoading, error } = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  const completedToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((h) => h.completedDates.includes(today)).length;
  };
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
  const longestStreak = () => {
    return Math.max(...habits.map(getStreak()), 0);
  };

  useEffect(() => {
    dispatch(fetchHabits());
  }, []);
  if (isLoading) {
    return (
      <p className="flex flex-col items-center mt-3 justify-center text-blue-600">
        Loading .....
      </p>
    );
  }
  if (error) {
    return (
      <p className="flex flex-col items-center mt-3 justify-center text-red-500">
        Error fetching the request
      </p>
    );
  }
  return (
    <div className="flex flex-col items-center mt-3 justify-center">
      <p className="font-extrabold"> Habit Statistics</p>
      <p>Total Habits: {habits.length}</p>
      <p> Completed Today: {completedToday}</p>
      <p> Logenst Streak: {longestStreak}</p>
    </div>
  );
};

export default HabitStats;
