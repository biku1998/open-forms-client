import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#8b5cf6",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiIconButton: {
      root: {
        border: "1px solid #e2e8f0",
      },
    },
  },
});
