const Reviews = () => (
  <section className="detailed-info__reviews reviews" id="reviews">
    <h3 className="reviews__heading">Отзывы</h3>
    <ul className="reviews__list">
      <li className="reviews__item">
        <blockquote className="reviews__quote">
          <cite className="reviews__author">Борис Иванов</cite>
          <div className="reviews__content-wrapper reviews__content-wrapper--dignity">
            <h4 className="reviews__content-heading">Достоинства</h4>
            <p className="reviews__content">
              мощность, внешний вид
            </p>
          </div>
          <div className="reviews__content-wrapper reviews__content-wrapper--limitations">
            <h4 className="reviews__content-heading">Недостатки</h4>
            <p className="reviews__content">
              Слабые тормозные колодки (пришлось заменить)
            </p>
          </div>
          <div className="reviews__content-wrapper reviews__content-wrapper--comment">
            <h4 className="reviews__content-heading">Комментарий</h4>
            <p className="reviews__content">
              Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам.
              Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
            </p>
          </div>
        </blockquote>
        <div className="reviews__rating rating">
          <p className="rating__text">Оценка пользователя по пятибалльной шкале - 3</p>
          <ul className="rating__stars-list">
            <li className="rating__stars-item">
              <span className="rating__star rating__star--checked">✩</span>
            </li>
            <li className="rating__stars-item">
              <span className="rating__star rating__star--checked">✩</span>
            </li>
            <li className="rating__stars-item">
              <span className="rating__star rating__star--checked">✩</span>
            </li>
            <li className="rating__stars-item">
              <span className="rating__star">✩</span>
            </li>
            <li className="rating__stars-item">
              <span className="rating__star">✩</span>
            </li>
          </ul>
          <p className="rating__total">
            <span>Пользователь </span>
            <strong className="rating__total-text">советует</strong>
            <span> это транспортное средство</span>
          </p>
        </div>
        <div className="reviews__bottom-wrapper">
          <p className="reviews__date-paragraph">
            <time className="reviews__date" dateTime="2016-11-18T09:54">1 минуту назад</time>
          </p>
          <p className="reviews__buttons-paragraph">
            <button className="reviews__show-answer-form" type="button">Ответить</button>
          </p>
        </div>
      </li>
    </ul>
    <button className="reviews__show-review-form" type="button">Оставить отзыв</button>
  </section>
);

export default Reviews;
