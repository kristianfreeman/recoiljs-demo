import { atom } from "recoil";

export const repos = atom({
  key: "repos",
  default: {
    daily: [],
    weekly: [],
    monthly: [],
  },
});

export const view = atom({
  key: "view",
  default: "monthly",
});
