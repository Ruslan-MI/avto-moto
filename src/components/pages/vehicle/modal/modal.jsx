import {
  useState,
} from "react";

import StarRating from "./star-rating/star-rating";

const INITIAL_RATING = 5;

const ratings = [
  {
    title: `Гнев и ненависть`,
    value: 1,
  },
  {
    title: `Посредственно`,
    value: 2,
  },
  {
    title: `Удовлетворительно`,
    value: 3,
  },
  {
    title: `Хорошо`,
    value: 4,
  },
  {
    title: `Отлично`,
    value: 5,
  },
];

const Modal = () => {
  const [
    state,
    setState,
  ] = useState({
    currentRating: INITIAL_RATING,
  });

  const onRatingChange = (newRating) => {
    setState(() => ({
      currentRating: newRating,
    }));
  };

  return (
    <section className="page__modal modal modal--new-review-form">
      <h3 className="modal__heading">Оставить отзыв</h3>
      <form className="modal__form" action="https://echo.htmlacademy.ru" method="POST">
        <div className="modal__inputs-wrapper modal__inputs-wrapper--first">
          <p className="modal__paragraph modal__paragraph--name">
            <label className="modal__label modal__label--name visually-hidden" htmlFor="name">Имя:</label>
            <input className="modal__input modal__input--name" type="text" name="name"
              id="name" placeholder="Имя" pattern="[А-Яа-яЁ-ё]{1,}" required autoFocus />
          </p>
          <p className="modal__paragraph modal__paragraph--dignity">
            <label className="modal__label modal__label--dignity visually-hidden" htmlFor="dignity">Достоинства:</label>
            <input className="modal__input modal__input--dignity" type="text" name="dignity"
              id="dignity" placeholder="Достоинства" pattern="[А-Яа-яЁ-ё]{1,}" />
          </p>
          <p className="modal__paragraph modal__paragraph--limitations">
            <label className="modal__label modal__label--limitations visually-hidden" htmlFor="limitations">Недостатки:</label>
            <input className="modal__input modal__input--limitations" type="text" name="limitations"
              id="limitations" placeholder="Недостатки" pattern="[А-Яа-яЁ-ё]{1,}" />
          </p>
        </div>
        <div className="modal__inputs-wrapper modal__inputs-wrapper--second">
          <StarRating data={ratings} currentRating={state.currentRating} onChange={onRatingChange} />
          <p className="modal__paragraph modal__paragraph--comment">
            <label className="modal__label modal__label--comment visually-hidden" htmlFor="comment">Комментарий:</label>
            <textarea className="modal__input modal__input--comment" name="comment" id="comment" cols="30" rows="6"
              minLength="5" maxLength="200" placeholder="Комментарий" required />
          </p>
        </div>
        <p className="modal__paragraph modal__paragraph--submit-button">
          <button className="modal__submit-button" type="submit">Оставить отзыв</button>
        </p>
      </form>
    </section>
  );
};

export default Modal;
