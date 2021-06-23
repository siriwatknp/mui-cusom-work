import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { applicationTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={applicationTheme}>
      <CssBaseline />
      <Box textAlign="center">
        <Typography>Hello Material-UI</Typography>
        <Button>Get Started</Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
