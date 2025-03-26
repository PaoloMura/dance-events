import React from "react";
import events from "../data/events";
import {
  Avatar,
  Button,
  Card,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Rating,
  Stack,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { FiltersContext } from "../hooks/FiltersProvider";

export default function EventList() {
  const { days, style, type, rating } = React.useContext(FiltersContext);
  const [selected, setSelected] = React.useState(null);

  const filteredEvents = events
    .filter(
      (event) =>
        days.length === 0 ||
        (event.days && event.days.some((day) => days.includes(day)))
    )
    .filter(
      (event) => style === "" || (event.styles && event.styles.includes(style))
    )
    .filter(
      (event) => type === "" || (event.types && event.types.includes(type))
    )
    .filter((event) => rating === "" || (event.stars && event.stars >= rating))
    .sort((a, b) => Number(b.stars || 0) - Number(a.stars || 0));

  return (
    <Container maxWidth="sm" sx={{ paddingY: (theme) => theme.spacing(2) }}>
      <Stack spacing={2}>
        {filteredEvents.map((event, index) => (
          <Card key={index}>
            <List>
              <ListItem
                secondaryAction={
                  event.website && (
                    <IconButton
                      edge="end"
                      aria-label="website"
                      href={event?.website}
                      target="_blank"
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  )
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <PlaceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={event.name || "Unknown"}
                  secondary={event.location || undefined}
                />
              </ListItem>

              {event.days?.length && (
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthIcon />
                  </ListItemIcon>
                  <ListItemText>{event.days.join(", ")}</ListItemText>
                </ListItem>
              )}

              {event.stars && (
                <ListItem>
                  <Rating readOnly value={event.stars} />
                </ListItem>
              )}

              <ListItem>
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    overflow: "scroll",
                    paddingBottom: "8px",
                  }}
                >
                  {event.styles?.map((style, index) => (
                    <Chip key={index} label={style} color={style} />
                  ))}
                  {event.types?.map((type, index) => (
                    <Chip key={index} label={type} color={type} />
                  ))}
                </div>
              </ListItem>

              {event.notes && (
                <ListItem>
                  <Button
                    onClick={() => setSelected(index)}
                    fullWidth
                    sx={{ textTransform: "none" }}
                  >
                    <ListItemText>More info</ListItemText>
                  </Button>
                </ListItem>
              )}
            </List>
          </Card>
        ))}
      </Stack>

      {selected !== null && (
        <Dialog
          open={selected !== null}
          onClose={() => setSelected(null)}
          fullWidth
          aria-labelledby="event-dialog-title"
          aria-describedby="event-dialog-description"
        >
          <DialogTitle id="event-dialog-title">
            {filteredEvents[selected].name}
          </DialogTitle>
          <DialogContent id="event-dialog-description">
            {filteredEvents[selected]?.notes?.map((note, index) => (
              <DialogContentText key={index} paddingY="0.5rem">
                {note}
              </DialogContentText>
            ))}
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
}
