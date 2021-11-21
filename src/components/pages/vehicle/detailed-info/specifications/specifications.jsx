const Specifications = () => (
  <section className="detailed-info__specifications specifications" id="specifications">
    <h3 className="specifications__heading">Характеристики</h3>
    <dl className="specifications__list">
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Трансмиссия</dt>
        <dd className="specifications__definition">Роботизированная</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Мощность двигателя, л.с.</dt>
        <dd className="specifications__definition">249</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Тип двигателя</dt>
        <dd className="specifications__definition">Бензиновый</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Привод</dt>
        <dd className="specifications__definition">Полный</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Объём двигателя, л</dt>
        <dd className="specifications__definition">2.4</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Макс. крутящий момент</dt>
        <dd className="specifications__definition">370/4500</dd>
      </div>
      <div className="specifications__row-wrapper">
        <dt className="specifications__term">Количество цилиндров</dt>
        <dd className="specifications__definition">4</dd>
      </div>
    </dl>
  </section>
);

export default Specifications;
