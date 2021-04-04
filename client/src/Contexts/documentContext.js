// Import React Libs
import { createContext } from "react";

export const documentContext = createContext({
  document,
  setDocument: () => {},
});
