import React, {
  useState,
} from "react";
import PropTypes from "prop-types";

import {
  RATINGS,
} from "../../../../../const";

const INITIAL_RATING_ON_MOUSE_ENTER = 0;

const StarRating = ({
  currentRating,
  onChange,
}) => {
  const [
    state,
    setState,
  ] = useState({
    ratingOnMouseEnter: INITIAL_RATING_ON_MOUSE_ENTER,
  });

  const handleRatingChange = (evt) => {
    onChange(Number(evt.target.value));
  };

  const handleRatingMouseEnter = (evt) => {
    setState((prevState) => ({
      ...prevState,
      ratingOnMouseEnter: Number(evt.target.value),
    }));
  };

  const handleRatingMouseLeave = () => {
    setState((prevState) => ({
      ...prevState,
      ratingOnMouseEnter: INITIAL_RATING_ON_MOUSE_ENTER,
    }));
  };

  return (
    <div className="modal__star-rating star-rating">
      <h4 className="star-rating__heading">Оцените товар<span className="visually-hidden"> по пятибалльной шкале</span>:</h4>
      <fieldset className="star-rating__fieldset">
        {RATINGS.map(({
          title,
          value,
        }) => <input className={`star-rating__input ${(state.ratingOnMouseEnter || currentRating) >= value ? `star-rating__input--active` : ``}`}
          type="radio" name="rating" key={value} aria-label={title} value={value} defaultChecked={currentRating === value}
          onChange={handleRatingChange} onMouseEnter={handleRatingMouseEnter} onMouseLeave={handleRatingMouseLeave} />)}
      </fieldset>
    </div>
  );
};

StarRating.propTypes = {
  currentRating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarRating;
