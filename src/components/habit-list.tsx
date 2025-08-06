import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import { Habit, toggleHabit } from "../redux/features/habit-slice";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const curerntDate = new Date();

    while (true) {
      const dateString = curerntDate.toISOString().split("T")[0];
      if (habit.completedDates.includes(dateString)) {
        streak++;
        curerntDate.setDate(curerntDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid xs={12} sm={6}>
            <Typography variant="h6">{habit.name}</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ textTransform: "capitalize" }}
            >
              {habit.frequnecy}
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Button
                variant="outlined"
                color={
                  habit.completedDates.includes(today) ? "success" : "primary"
                }
                startIcon={<CheckCircle />}
                onClick={() =>
                  dispatch(toggleHabit({ id: habit.id, date: today }))
                }
              >
                {habit.completedDates.includes(today)
                  ? "Completed"
                  : "Mark Complete"}
              </Button>
              <Button variant="outlined" color="error" startIcon={<Delete />}>
                Remove
              </Button>
            </Box>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Current Streak: {getStreak(habit)} days
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(getStreak(habit) / 30) * 100}
              sx={{ mt: 1 }}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
