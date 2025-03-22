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

export default function Header({
  days,
  setDays,
  style,
  setStyle,
  type,
  setType,
  rating,
  setRating,
}) {
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
              <DaysSelect days={days} setDays={setDays} />
              <StyleSelect style={style} setStyle={setStyle} />
              <TypeSelect type={type} setType={setType} />
              <RatingSelect rating={rating} setRating={setRating} />
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
            }
          },
        }}
      >
        <DaysSelect days={days} setDays={setDays} />
        <StyleSelect style={style} setStyle={setStyle} />
        <TypeSelect type={type} setType={setType} />
        <RatingSelect rating={rating} setRating={setRating} />
      </Drawer>
    </>
  );
}
