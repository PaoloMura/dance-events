import { createContext } from "react";

export const FiltersContext = createContext({
  days: [],
  style: "",
  type: "",
  rating: "",
  dispatch: () => {},
});

export const FiltersProvider = ({ children, filters, dispatch }) => {
  return (
    <FiltersContext.Provider
      value={{
        ...filters,
        dispatch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
