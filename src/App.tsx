import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
