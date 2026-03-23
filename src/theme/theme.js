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
  shadows: ["none","0px 2px 1px -1px rgba(0,0,0,0.2)","0px 3px 1px -2px rgba(0,0,0,0.2)","0px 3px 3px -2px rgba(0,0,0,0.2)","0px 2px 4px -1px rgba(0,0,0,0.2)","0px 3px 5px -1px rgba(0,0,0,0.2)","0px 3px 5px -1px rgba(0,0,0,0.2)","0px 4px 5px -2px rgba(0,0,0,0.2)","0px 5px 5px -3px rgba(0,0,0,0.2)","0px 5px 6px -3px rgba(0,0,0,0.2)","0px 6px 6px -3px rgba(0,0,0,0.2)","0px 6px 7px -4px rgba(0,0,0,0.2)","0px 7px 8px -4px rgba(0,0,0,0.2)","0px 7px 8px -4px rgba(0,0,0,0.2)","0px 7px 9px -4px rgba(0,0,0,0.2)","0px 8px 9px -5px rgba(0,0,0,0.2)","0px 8px 10px -5px rgba(0,0,0,0.2)","0px 8px 11px -5px rgba(0,0,0,0.2)","0px 9px 11px -5px rgba(0,0,0,0.2)","0px 9px 12px -6px rgba(0,0,0,0.2)","0px 10px 13px -6px rgba(0,0,0,0.2)","0px 10px 13px -6px rgba(0,0,0,0.2)","0px 10px 14px -6px rgba(0,0,0,0.2)","0px 11px 14px -7px rgba(0,0,0,0.2)","0px 11px 15px -7px rgba(0,0,0,0.2)"],
});
