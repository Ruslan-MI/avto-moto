import React, {
  useState,
  useRef,
} from "react";
import PropTypes from "prop-types";

import StarRating from "./star-rating/star-rating";
import withOverlay from "../../../../hocs/with-overlay/with-overlay";

const Modal = ({
  onModalClose,
  onReviewAdd,
}) => {
  const [
    state,
    setState,
  ] = useState({
    name: localStorage.getItem(`name`) || ``,
    dignity: localStorage.getItem(`dignity`) || ``,
    limitations: localStorage.getItem(`limitations`) || ``,
    rating: Number(localStorage.getItem(`rating`)) || 5,
    comment: localStorage.getItem(`comment`) || ``,
  });

  const nameInputRef = useRef();
  const closeButtonRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    localStorage.clear();
    onReviewAdd(state);
  };

  const handleInputChange = (evt) => {
    setState((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));

    localStorage.setItem(`${evt.target.name}`, evt.target.value);
  };

  const onRatingChange = (newRating) => {
    setState((prevState) => ({
      ...prevState,
      rating: newRating,
    }));

    localStorage.setItem(`rating`, newRating);
  };

  const handleCloseButtonClick = () => {
    onModalClose();
  };

  const handleCloseButtonTabKeydown = (evt) => {
    if (!evt.shiftKey && evt.key === `Tab`) {
      evt.preventDefault();

      nameInputRef.current.focus();
    }
  };

  const handleNameInputShiftTabKeydown = (evt) => {
    if (evt.shiftKey && evt.key === `Tab`) {
      evt.preventDefault();

      closeButtonRef.current.focus();
    }
  };

  return (
    <section className="page__modal modal modal--new-review-form">
      <h3 className="modal__heading">Оставить отзыв</h3>
      <form className="modal__form" action="https://echo.htmlacademy.ru" method="POST" onSubmit={handleFormSubmit}>
        <div className="modal__inputs-wrapper modal__inputs-wrapper--first">
          <p className="modal__paragraph modal__paragraph--name">
            <label className="modal__label modal__label--name visually-hidden" htmlFor="name">Имя:</label>
            <input className="modal__input modal__input--name" type="text" name="name"
              id="name" placeholder="Имя" pattern="[A-Za-zА-Яа-яЁё]{1,}" required autoFocus value={state.name} ref={nameInputRef}
              onChange={handleInputChange} onKeyDown={handleNameInputShiftTabKeydown} />
          </p>
          <p className="modal__paragraph modal__paragraph--dignity">
            <label className="modal__label modal__label--dignity visually-hidden" htmlFor="dignity">Достоинства:</label>
            <input className="modal__input modal__input--dignity" type="text" name="dignity"
              id="dignity" placeholder="Достоинства" value={state.dignity} onChange={handleInputChange} />
          </p>
          <p className="modal__paragraph modal__paragraph--limitations">
            <label className="modal__label modal__label--limitations visually-hidden" htmlFor="limitations">Недостатки:</label>
            <input className="modal__input modal__input--limitations" type="text" name="limitations"
              id="limitations" placeholder="Недостатки" value={state.limitations} onChange={handleInputChange} />
          </p>
        </div>
        <div className="modal__inputs-wrapper modal__inputs-wrapper--second">
          <StarRating currentRating={Number(state.rating)} onChange={onRatingChange} />
          <p className="modal__paragraph modal__paragraph--comment">
            <label className="modal__label modal__label--comment visually-hidden" htmlFor="comment">Комментарий:</label>
            <textarea className="modal__input modal__input--comment" name="comment" id="comment" cols="30" rows="6"
              placeholder="Комментарий" required value={state.comment} onChange={handleInputChange} />
          </p>
        </div>
        <p className="modal__paragraph modal__paragraph--submit-button">
          <button className="modal__button modal__button--submit" type="submit">Оставить отзыв</button>
        </p>
      </form>
      <button className="modal__button modal__button--close" type="button" ref={closeButtonRef}
        onClick={handleCloseButtonClick} onKeyDown={handleCloseButtonTabKeydown}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </section>
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  onReviewAdd: PropTypes.func.isRequired,
};

export default withOverlay(Modal);
