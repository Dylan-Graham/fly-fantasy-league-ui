import { createContext, Dispatch } from "react";

export const initialState = {
  user: {
    _id: null,
    email: null,
    points: null,
    picks: {
      tierA: [{ name: "", id: -1 }],
      tierB: [{ name: "", id: -1 }],
      tierC: [{ name: "", id: -1 }],
    },
    rank: null,
    name: null,
  },
  setUser: (() => undefined) as Dispatch<any>,
};

export const UserContext = createContext(initialState);
