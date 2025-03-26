import { allDays } from "./constants";

function getInitialDays(searchParams) {
  const days =
    searchParams
      .get("days")
      ?.split(",")
      ?.filter((day) => allDays.includes(day)) || [];

  return [...new Set(days)];
}

function getInitialStyle(searchParams) {
  const style = searchParams.get("style") || "";
  if (["bachata", "salsa", "kizomba"].includes(style)) {
    return style;
  }

  return "";
}

function getInitialType(searchParams) {
  const type = searchParams.get("type") || "";
  if (["classes", "social"].includes(type)) {
    return type;
  }

  return "";
}

function getInitialRating(searchParams) {
  const rating = searchParams.get("rating") || "";
  if (["1", "2", "3", "4", "5"].includes(rating)) {
    return rating;
  }

  return "";
}

export function initialiseFilters(searchParams) {
  return {
    days: getInitialDays(searchParams),
    style: getInitialStyle(searchParams),
    type: getInitialType(searchParams),
    rating: getInitialRating(searchParams),
  };
}
