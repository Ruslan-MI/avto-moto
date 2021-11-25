import {
  useState,
} from "react";
import PropTypes from "prop-types";

import StarRating from "./star-rating/star-rating";
import withOverlay from "../../../../hocs/with-overlay";

const initialState = {
  name: ``,
  dignity: ``,
  limitations: ``,
  rating: 5,
  comment: ``,
};

const Modal = ({
  onModalToggle,
  onReviewAdd,
}) => {
  const [
    state,
    setState,
  ] = useState(initialState);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onReviewAdd(state);
    onModalToggle();
  };

  const handleChange = (evt) => {
    setState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
    console.log(state);
  };

  const onRatingChange = (newRating) => {
    setState((state) => ({
      ...state,
      rating: newRating,
    }));
  };

  const handleCloseButtonClick = () => {
    onModalToggle();
  };

  return (
    <section className="page__modal modal modal--new-review-form">
      <h3 className="modal__heading">Оставить отзыв</h3>
      <form className="modal__form" action="https://echo.htmlacademy.ru" method="POST" onSubmit={handleFormSubmit}>
        <div className="modal__inputs-wrapper modal__inputs-wrapper--first">
          <p className="modal__paragraph modal__paragraph--name">
            <label className="modal__label modal__label--name visually-hidden" htmlFor="name">Имя:</label>
            <input className="modal__input modal__input--name" type="text" name="name"
              id="name" placeholder="Имя" pattern="[А-Яа-яЁ-ё]{1,}" required autoFocus value={state.name} onChange={handleChange} />
          </p>
          <p className="modal__paragraph modal__paragraph--dignity">
            <label className="modal__label modal__label--dignity visually-hidden" htmlFor="dignity">Достоинства:</label>
            <input className="modal__input modal__input--dignity" type="text" name="dignity"
              id="dignity" placeholder="Достоинства" pattern="[А-Яа-яЁ-ё]{1,}" value={state.dignity} onChange={handleChange} />
          </p>
          <p className="modal__paragraph modal__paragraph--limitations">
            <label className="modal__label modal__label--limitations visually-hidden" htmlFor="limitations">Недостатки:</label>
            <input className="modal__input modal__input--limitations" type="text" name="limitations"
              id="limitations" placeholder="Недостатки" pattern="[А-Яа-яЁ-ё]{1,}" value={state.limitations} onChange={handleChange} />
          </p>
        </div>
        <div className="modal__inputs-wrapper modal__inputs-wrapper--second">
          <StarRating currentRating={Number(state.rating)} onChange={onRatingChange} />
          <p className="modal__paragraph modal__paragraph--comment">
            <label className="modal__label modal__label--comment visually-hidden" htmlFor="comment">Комментарий:</label>
            <textarea className="modal__input modal__input--comment" name="comment" id="comment" cols="30" rows="6"
              minLength="5" maxLength="200" placeholder="Комментарий" required value={state.comment} onChange={handleChange} />
          </p>
        </div>
        <p className="modal__paragraph modal__paragraph--submit-button">
          <button className="modal__button modal__button--submit" type="submit">Оставить отзыв</button>
        </p>
      </form>
      <button className="modal__button modal__button--close" type="button" onClick={handleCloseButtonClick}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </section>
  );
};

Modal.propTypes = {
  onModalToggle: PropTypes.func.isRequired,
  onReviewAdd: PropTypes.func.isRequired,
};

export default withOverlay(Modal);
