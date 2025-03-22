import React from "react";
import events from "../data/events";
import {
  Avatar,
  Card,
  Chip,
  Container,
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

export default function EventList({ days, style, type, rating }) {
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
    .filter(
      (event) => rating === null || (event.stars && event.stars >= rating)
    );

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
            </List>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
