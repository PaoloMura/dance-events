import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import DaysSelect from "./DaysSelect";
import StyleSelect from "./StyleSelect";
import TypeSelect from "./TypeSelect";
import RatingSelect from "./RatingSelect";
import TuneIcon from "@mui/icons-material/Tune";
import ClearButton from "./ClearButton";

export default function Header() {
  const [openFilters, setOpenFilters] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar>
        <Toolbar>
          {isMobile ? (
            <IconButton onClick={() => setOpenFilters(!openFilters)}>
              <TuneIcon
                sx={{
                  color: (theme) => theme.palette.primary.contrastText,
                }}
              />
            </IconButton>
          ) : (
            <>
              <DaysSelect />
              <StyleSelect />
              <TypeSelect />
              <RatingSelect />
              <ClearButton />
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        open={openFilters}
        onClose={() => setOpenFilters(false)}
        slotProps={{
          paper: {
            sx: {
              width: "85%",
              backgroundColor: (theme) => theme.palette.grey[900],
            },
          },
        }}
      >
        <DaysSelect />
        <StyleSelect />
        <TypeSelect />
        <RatingSelect />
        <ClearButton />
      </Drawer>
    </>
  );
}
