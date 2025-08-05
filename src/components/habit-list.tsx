import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CheckCircle, Delete } from "@mui/icons-material";
import { toggleHabit } from "../redux/features/habit-slice";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits);
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
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
                Delete
              </Button>
            </Box>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
