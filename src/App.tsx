import { Button, Fab } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <span className="text-8xl">Hello world!</span>
      <Button variant="contained" color="primary" disableElevation>
        loading...
      </Button>
      <Fab color="primary">Here</Fab>
    </ThemeProvider>
  );
}

export default App;
