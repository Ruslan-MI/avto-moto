import React, {
  useState,
} from "react";
import PropTypes from "prop-types";

const MIN_SLIDE_INDEX = 0;
const INCREMENT_STEP = 1;

const Slider = ({
  slides,
}) => {
  const [
    state,
    setState,
  ] = useState({
    currentSlideIndex: MIN_SLIDE_INDEX,
  });

  const maxSlideIndex = slides.length - 1;

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
      <img className="slider__full-size-image" src={slides[state.currentSlideIndex].fullSize}
        alt={slides[state.currentSlideIndex].description} width="600" height="375" />
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
          {slides.map(({
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

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.exact({
    fullSize: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Slider;
