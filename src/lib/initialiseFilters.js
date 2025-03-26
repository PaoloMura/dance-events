import { allDays } from "./constants";

function getInitialDays(searchParams) {
  const days =
    searchParams
      .get("days")
      ?.split(",")
      ?.filter((day) => allDays.includes(day)) || [];

  return [...new Set(days)];
}

function getInitialValue(searchParams, key, validValues) {
  const value = searchParams.get(key) || "";
  if (validValues.includes(value)) {
    return value;
  }

  return "";
}

export function initialiseFilters(searchParams) {
  return {
    days: getInitialDays(searchParams),
    style: getInitialValue(searchParams, "style", [
      "bachata",
      "salsa",
      "kizomba",
    ]),
    type: getInitialValue(searchParams, "type", ["classes", "social"]),
    rating: getInitialValue(searchParams, "rating", ["1", "2", "3", "4", "5"]),
  };
}
