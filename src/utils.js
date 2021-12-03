import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";
dayjs.extend(relativeTime);

import {
  RATINGS,
} from "./const";

export const getRatingTitle = (rating) =>
  RATINGS.find((item) => item.value === rating).title;

export const getRelativeTime = (date) =>
  dayjs(date).locale(`ru`).fromNow();

export const checkInvalidity = (inputs) => inputs.map((input) => {
  const validity = input.validity;
  const classList = input.parentElement.classList;

  if (validity.valueMissing) {
    classList.add(`modal__invalidity--value-missing`);
  } else {
    classList.remove(`modal__invalidity--value-missing`);
  }

  if (validity.patternMismatch) {
    classList.add(`modal__invalidity--pattern-mismatch`);
  } else {
    classList.remove(`modal__invalidity--pattern-mismatch`);
  }

  if (validity.valid) {
    classList.remove(`modal__invalidity`);

    return true;
  }

  classList.add(`modal__invalidity`);

  return false;
}).includes(false);
