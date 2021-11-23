const Reviews = () => (
  <section className="detailed-info__reviews reviews" id="reviews">
    <h3 className="reviews__heading visually-hidden">Отзывы</h3>
    <ul className="reviews__list">
      <li className="reviews__item">
        <blockquote className="reviews__blockquote">
          <p className="reviews__author-paragraph">
            <cite className="reviews__author">Борис Иванов</cite>
          </p>
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
        <div className="reviews__rating">
          <p className="reviews__rating-text visually-hidden">Оценка пользователя по пятибалльной шкале - 3</p>
          <div className="reviews__stars">
            <div className="reviews__stars reviews__stars--active"></div>
          </div>
          <p className="reviews__rating-total">
            <span className="visually-hidden">Пользователь </span>
            <strong className="reviews__rating-total-essence">советует</strong>
            <span className="visually-hidden"> этот автомобиль</span>
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
      <li className="reviews__item">
        <blockquote className="reviews__blockquote">
          <p className="reviews__author-paragraph">
            <cite className="reviews__author">Марсель Исмагилов</cite>
          </p>
          <div className="reviews__content-wrapper reviews__content-wrapper--dignity">
            <h4 className="reviews__content-heading">Достоинства</h4>
            <p className="reviews__content">
              Cтиль, комфорт, управляемость
            </p>
          </div>
          <div className="reviews__content-wrapper reviews__content-wrapper--limitations">
            <h4 className="reviews__content-heading">Недостатки</h4>
            <p className="reviews__content">
              Дорогой ремонт и обслуживание
            </p>
          </div>
          <div className="reviews__content-wrapper reviews__content-wrapper--comment">
            <h4 className="reviews__content-heading">Комментарий</h4>
            <p className="reviews__content">
              Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые.
              Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль.
              Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
            </p>
          </div>
        </blockquote>
        <div className="reviews__rating">
          <p className="reviews__rating-text visually-hidden">Оценка пользователя по пятибалльной шкале - 3</p>
          <div className="reviews__stars">
            <div className="reviews__stars reviews__stars--active"></div>
          </div>
          <p className="reviews__rating-total">
            <span className="visually-hidden">Пользователь </span>
            <strong className="reviews__rating-total-essence">советует</strong>
            <span className="visually-hidden"> этот автомобиль</span>
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
    </ul>
    <p className="reviews__buttons-paragraph reviews__buttons-paragraph--show-review-form">
      <button className="reviews__button reviews__button--show-review-form" type="button">Оставить отзыв</button>
    </p>
  </section>
);

export default Reviews;
