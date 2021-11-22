const GeneralInfo = () => (
  <section className="main__general-info general-info">
    <h2 className="general-info__heading visually-hidden">Основная информация</h2>
    <dl className="general-info__specifications-list">
      <div className="general-info__specifications-item general-info__specifications-item--model">
        <dt className="general-info__specifications-term visually-hidden">Наименование модели</dt>
        <dd className="general-info__specifications-definition general-info__specifications-definition--model"><strong>Марпех 11</strong></dd>
      </div>
      <div className="general-info__specifications-item general-info__specifications-item--fuel-type">
        <dt className="general-info__specifications-term visually-hidden">Тип потребляемого топлива</dt>
        <dd className="general-info__specifications-definition general-info__specifications-definition--fuel-type">Бензин</dd>
      </div>
      <div className="general-info__specifications-item general-info__specifications-item--transmission">
        <dt className="general-info__specifications-term visually-hidden">Тип трансмиссии</dt>
        <dd className="general-info__specifications-definition general-info__specifications-definition--transmission">Механика</dd>
      </div>
      <div className="general-info__specifications-item general-info__specifications-item--power">
        <dt className="general-info__specifications-term visually-hidden">Мощность двигателя</dt>
        <dd className="general-info__specifications-definition general-info__specifications-definition--power">100 л.с.</dd>
      </div>
      <div className="general-info__specifications-item general-info__specifications-item--volume">
        <dt className="general-info__specifications-term visually-hidden">Объём двигателя</dt>
        <dd className="general-info__specifications-definition general-info__specifications-definition--volume">1.4 л</dd>
      </div>
    </dl>
    <ul className="general-info__price-list">
      <li className="general-info__price-item">
        <span className="general-info__price-description visually-hidden">Текущая цена: </span>
        <span className="general-info__price-value general-info__price-value--current">2 300 000 ₽</span>
      </li>
      <li className="general-info__price-item">
        <span className="general-info__price-description visually-hidden">Старая цена: </span>
        <span className="general-info__price-value general-info__price-value--old">2 <span className="crutch" style={{ "padding-left": 5 }}></span> 400 000 ₽</span>
      </li>
    </ul>
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
