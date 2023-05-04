import { createTheme } from "@mui/material";
export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#33b3a6",
      light: "#dff3f1",
      contrastText: "rgba(255,255,255,1)",
    },
    secondary: {
      main: "#1e7d74",
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Montserrat",
  },
  shadows: "none",
});
