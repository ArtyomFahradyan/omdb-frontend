import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F76448",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // Name of the component
    MuiDialog: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: "6px 0",
        },
      },
    },
  },
});
export default theme;
