import React from "react";
import { Container, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>

        </Box>
      </Container>
  );
};

export default App;
