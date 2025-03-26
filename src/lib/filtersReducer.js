function parseDays(days) {
  return typeof days === "string" ? days.split(",") : days;
}

function setQueryParamsList(key, value) {
  const searchParams = new URLSearchParams(window.location.search);
  if (value.length > 0) {
    searchParams.set(key, value.join(","));
  } else {
    searchParams.delete(key);
  }
  window.history.replaceState(null, "", `?${searchParams.toString()}`);
}

function setQueryParamsValue(key, value) {
  const searchParams = new URLSearchParams(window.location.search);
  if (value === "") {
    searchParams.delete(key);
  } else {
    searchParams.set(key, value);
  }
  window.history.replaceState(null, "", `?${searchParams.toString()}`);
}

export function filtersReducer(filters, action) {
  switch (action.type) {
    case "SET_DAYS":
      const daysList = parseDays(action.payload);
      setQueryParamsList("days", daysList);
      return {
        ...filters,
        days: daysList,
      };
    case "SET_RATING":
      const rating = action.payload;
      setQueryParamsValue("rating", rating);
      return {
        ...filters,
        rating,
      };
    case "SET_STYLE":
      const style = action.payload;
      setQueryParamsValue("style", style);
      return {
        ...filters,
        style,
      };
    case "SET_TYPE":
      const type = action.payload;
      setQueryParamsValue("type", type);
      return {
        ...filters,
        type,
      };
    default:
      return {
        ...filters,
      };
  }
}
