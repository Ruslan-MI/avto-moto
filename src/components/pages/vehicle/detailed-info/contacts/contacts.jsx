import Map from "./map/map";

const Contacts = () => (
  <section className="detailed-info__contacts contacts" id="contacts">
    <h3 className="contacts__heading visually-hidden">Контакты</h3>
    <ul className="contacts__list">
      <li className="contacts__item contacts__item--address">
        <h4 className="contacts__item-heading">Адрес</h4>
        <a className="contacts__content contacts__content--address" href="geo:#">Санкт-Петербург,<br /> набережная реки Карповки, дом 5</a>
        <figure className="contacts__figure">
          <figcaption className="contacts__figcaption visually-hidden">Интерактивная карта, с отмеченным адресом</figcaption>
          <Map />
        </figure>
      </li>
      <li className="contacts__item contacts__item--working-hours">
        <h4 className="contacts__item-heading">Режим работы</h4>
        <p className="contacts__content contacts__content--working-hours">Ежедневно, с 10:00 до 21:00</p>
      </li>
      <li className="contacts__item contacts__item--phone">
        <h4 className="contacts__item-heading">Телефон</h4>
        <a className="contacts__content contacts__content--phone" href="tel:+78003335599">8 (800) 333-55-99</a>
      </li>
      <li className="contacts__item contacts__item--email">
        <h4 className="contacts__item-heading">E-mail</h4>
        <a className="contacts__content contacts__content--email" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
      </li>
    </ul>
  </section>
);

export default Contacts;
