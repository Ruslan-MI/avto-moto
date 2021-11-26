import React, {
  useState,
} from "react";
import {
  nanoid,
} from "nanoid";

import thumbnailDesktopSlide1 from "../../../../img/thumbnail-desktop-slide-1.jpg";
import thumbnailDesktopSlide2 from "../../../../img/thumbnail-desktop-slide-2.jpg";
import thumbnailDesktopSlide3 from "../../../../img/thumbnail-desktop-slide-3.jpg";
import desktopSlide1 from "../../../../img/desktop-slide-1.jpg";
import desktopSlide2 from "../../../../img/desktop-slide-2.jpg";
import desktopSlide3 from "../../../../img/desktop-slide-3.jpg";

const MIN_SLIDE_INDEX = 0;
const INCREMENT_STEP = 1;

const carPhotos = [
  {
    fullSize: desktopSlide1,
    thumbnail: thumbnailDesktopSlide1,
    description: `Описание первого слайда`,
    id: nanoid(),
  },
  {
    fullSize: desktopSlide2,
    thumbnail: thumbnailDesktopSlide2,
    description: `Описание второго слайда`,
    id: nanoid(),
  },
  {
    fullSize: desktopSlide3,
    thumbnail: thumbnailDesktopSlide3,
    description: `Описание третьего слайда`,
    id: nanoid(),
  },
];

const maxSlideIndex = carPhotos.length - 1;

const Slider = () => {
  const [
    state,
    setState,
  ] = useState({
    currentSlideIndex: MIN_SLIDE_INDEX,
  });

  const handleShowPreviousSlideButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      currentSlideIndex: prevState.currentSlideIndex - INCREMENT_STEP,
    }));
  };

  const handleShowNextSlideButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      currentSlideIndex: prevState.currentSlideIndex + INCREMENT_STEP,
    }));
  };

  return (
    <section className="main__slider slider">
      <h2 className="slider__heading visually-hidden">Фотографии</h2>
      <img className="slider__full-size-image" src={carPhotos[state.currentSlideIndex].fullSize}
        alt={carPhotos[state.currentSlideIndex].description} width="600" height="375" />
      <p className="slider__new-model-mark"><b>New model</b></p>
      <div className="slider__bottom-wrapper">
        <p className="slider__buttons-paragraph">
          <button className="slider__button slider__button--show-previous-slide" disabled={state.currentSlideIndex === MIN_SLIDE_INDEX}
            onClick={handleShowPreviousSlideButtonClick}>
            <span className="slider__button-text visually-hidden">Показать предыдущий слайд</span>
          </button>
          <button className="slider__button slider__button--show-next-slide" disabled={state.currentSlideIndex === maxSlideIndex}
            onClick={handleShowNextSlideButtonClick}>
            <span className="slider__button-text visually-hidden">Показать следующий слайд</span>
          </button>
        </p>
        <ul className="slider__list">
          {carPhotos.map(({
            thumbnail,
            description,
            id,
          }, i,
          ) => (
            <li className={`slider__item ${i === state.currentSlideIndex ? `slider__item--active` : ``}`} key={id}>
              <img className="slider__thumbnail-image" src={thumbnail} alt={description} width="128" height="80" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Slider;
