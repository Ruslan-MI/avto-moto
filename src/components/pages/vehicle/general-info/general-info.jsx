const GeneralInfo = () => (
  <section className="main__general-info general-info">
    <h2 className="general-info__heading">Основная информация</h2>
    <dl className="general-info__list">
      <div className="general-info__wrapper general-info__wrapper--model">
        <dt className="general-info__term">Наименование модели</dt>
        <dd className="general-info__definition"><b>Марпех 11</b></dd>
      </div>
      <div className="general-info__wrapper general-info__wrapper--fuel-type">
        <dt className="general-info__term">Тип потребляемого топлива</dt>
        <dd className="general-info__definition">Бензин</dd>
      </div>
      <div className="general-info__wrapper general-info__wrapper--transmission">
        <dt className="general-info__term">Тип трансмиссии</dt>
        <dd className="general-info__definition">Механика</dd>
      </div>
      <div className="general-info__wrapper general-info__wrapper--power">
        <dt className="general-info__term">Мощность двигателя</dt>
        <dd className="general-info__definition">100 л.с.</dd>
      </div>
      <div className="general-info__wrapper general-info__wrapper--volume">
        <dt className="general-info__term">Объём двигателя</dt>
        <dd className="general-info__definition">1.4 л</dd>
      </div>
    </dl>
    <div className="general-info__prices">
      <p className="general-info__price">
        <span className="general-info__price-description">Текущая цена: </span>
        <span className="general-info__price-value">2 300 000 ₽</span>
      </p>
      <p className="general-info__price">
        <span className="general-info__price-description">Старая цена: </span>
        <span className="general-info__price-value">2 400 000 ₽</span>
      </p>
    </div>
    <ul className="general-info__links-list">
      <li className="general-info__links-item">
        <a className="general-info__link general-info__link--submit-application" href="#">Оставить заявку</a>
      </li>
      <li className="general-info__links-item">
        <a className="general-info__link general-info__link--buy-in-credit" href="#">В кредит от 11 000 ₽</a>
      </li>
    </ul>
  </section>
);

export default GeneralInfo;
