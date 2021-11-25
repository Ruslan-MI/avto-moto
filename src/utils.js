import {
  RATINGS,
} from "./const";

export const getRatingTitle = (rating) =>
  RATINGS.find((item) => item.value === rating).title;
