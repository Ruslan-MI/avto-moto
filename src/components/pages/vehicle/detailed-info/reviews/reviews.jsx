import React from "react";
import PropTypes from "prop-types";

import {
  getRatingTitle,
} from "../../../../../utils";

const RATING_STAR_WIDTH = 20;

const Reviews = ({
  reviews,
  onModalOpen,
}) => {
  const handleShowReviewFormButtonClick = () => {
    onModalOpen();
  };

  return (
    <section className="detailed-info__reviews reviews" id="reviews">
      <h3 className="reviews__heading visually-hidden">Отзывы</h3>
      <ul className="reviews__list">
        {reviews.map(({
          name,
          dignity,
          limitations,
          rating,
          comment,
          id,
        }) => (
          <li className="reviews__item" key={id}>
            <blockquote className="reviews__blockquote">
              <p className="reviews__author-paragraph">
                <cite className="reviews__author">{name}</cite>
              </p>
              <div className="reviews__content-wrapper reviews__content-wrapper--dignity">
                <h4 className="reviews__content-heading">Достоинства</h4>
                <p className="reviews__content">
                  {dignity}
                </p>
              </div>
              <div className="reviews__content-wrapper reviews__content-wrapper--limitations">
                <h4 className="reviews__content-heading">Недостатки</h4>
                <p className="reviews__content">
                  {limitations}
                </p>
              </div>
              <div className="reviews__content-wrapper reviews__content-wrapper--comment">
                <h4 className="reviews__content-heading">Комментарий</h4>
                <p className="reviews__content">
                  {comment}
                </p>
              </div>
            </blockquote>
            <div className="reviews__rating">
              <div className="reviews__stars">
                <div className="reviews__stars reviews__stars--active" style={{
                  width: `${RATING_STAR_WIDTH * rating}%`,
                }} />
              </div>
              <p className="reviews__rating-total">
                <span className="visually-hidden">Итоговая оценка: </span>
                <strong className="reviews__rating-total-essence">{getRatingTitle(rating)}</strong>
              </p>
            </div>
            <div className="reviews__bottom-wrapper">
              <p className="reviews__date-paragraph">
                <time className="reviews__date" dateTime="2016-11-18T09:54">1 минуту назад</time>
              </p>
              <p className="reviews__buttons-paragraph reviews__buttons-paragraph--show-answer-form">
                <button className="reviews__button reviews__button--show-answer-form" type="button">Ответить</button>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="reviews__buttons-paragraph reviews__buttons-paragraph--show-review-form">
        <button className="reviews__button reviews__button--show-review-form" type="button"
          onClick={handleShowReviewFormButtonClick}>Оставить отзыв</button>
      </p>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    dignity: PropTypes.string.isRequired,
    limitations: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default Reviews;
