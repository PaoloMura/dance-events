import { createTheme } from "@mui/material";

const offWhite = "#f3f3f3";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#79010b",
    },
    secondary: {
      main: "#01796f",
    },
    salsa: {
      main: "#650109",
      light: "#8e020d",
      dark: "#4e0107",
      contrastText: offWhite,
    },
    bachata: {
      main: "#97020e",
      light: "#c50312",
      dark: "#6c010a",
      contrastText: offWhite,
    },
    kizomba: {
      main: "#ca0212",
      light: "#f30218",
      dark: "#9a0110",
      contrastText: offWhite,
    },
    classes: {
      main: "#01655d",
      light: "#01877a",
      dark: "#01443e",
      contrastText: offWhite,
    },
    social: {
      main: "#02978b",
      light: "#02b9ad",
      dark: "#01746f",
      contrastText: offWhite,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: offWhite,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: offWhite,
        },
        notchedOutline: {
          borderColor: offWhite,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: offWhite,
        },
      },
    },
  },
});
