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
  Stack,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function EventList({ days, style, type }) {
  const filteredEvents = events
    .filter(
      (event) =>
        days.length === 0 || event.days.some((day) => days.includes(day))
    )
    .filter((event) => style === "" || event.styles.includes(style))
    .filter((event) => type === "" || event.types.includes(type));

  return (
    <Container maxWidth="sm" sx={{ paddingY: (theme) => theme.spacing(2) }}>
      <Stack spacing={2}>
        {filteredEvents.map((event, index) => (
          <Card key={index}>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="website"
                    href={event?.website}
                    target="_blank"
                  >
                    <OpenInNewIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <PlaceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={event?.name}
                  secondary={event?.location}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText>{event.days.join(", ")}</ListItemText>
              </ListItem>
              <ListItem>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {event?.styles.map((style, index) => (
                    <Chip key={index} label={style} color={style} />
                  ))}
                  {event?.types.map((type, index) => (
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
