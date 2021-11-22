import thumbnailDesktopSlide1 from "../../../../img/thumbnail-desktop-slide-1.jpg";
import thumbnailDesktopSlide2 from "../../../../img/thumbnail-desktop-slide-2.jpg";
import thumbnailDesktopSlide3 from "../../../../img/thumbnail-desktop-slide-3.jpg";
import desktopSlide1 from "../../../../img/desktop-slide-1.jpg";
import desktopSlide2 from "../../../../img/desktop-slide-2.jpg";
import desktopSlide3 from "../../../../img/desktop-slide-3.jpg";

const Slider = () => (
  <section className="main__slider slider">
    <h2 className="slider__heading visually-hidden">Фотографии</h2>
    <img className="slider__full-size-image" src={desktopSlide1} alt="Описание фотографии" width="600" height="375" />
    <p className="slider__new-model-mark">New model</p>
    <div className="slider__bottom-wrapper">
      <p className="slider__buttons-paragraph">
        <button className="slider__button slider__button--show-previous-slide" disabled>
          <span className="slider__button-text visually-hidden">Показать предыдущий слайд</span>
        </button>
        <button className="slider__button slider__button--show-next-slide">
          <span className="slider__button-text visually-hidden">Показать следующий слайд</span>
        </button>
      </p>
      <ul className="slider__list">
        <li className="slider__item">
          <img className="slider__thumbnail-image" src={thumbnailDesktopSlide1} alt="Описание первого слайда" width="128" height="80" />
        </li>
        <li className="slider__item">
          <img className="slider__thumbnail-image" src={thumbnailDesktopSlide2} alt="Описание второго слайда" width="128" height="80" />
        </li>
        <li className="slider__item">
          <img className="slider__thumbnail-image" src={thumbnailDesktopSlide3} alt="Описание третьего слайда" width="128" height="80" />
        </li>
      </ul>
    </div>
  </section>
);

export default Slider;
