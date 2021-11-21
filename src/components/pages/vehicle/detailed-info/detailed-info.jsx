import Specifications from "./specifications/specifications";
import Reviews from "./reviews/reviews";
import Contacts from "./contacts/contacts";

const DetailedInfo = () => (
  <section className="page-main__detailed-info detailed-info">
    <h2 className="detailed-info__heading">Подробная информация</h2>
    <ul className="detailed-info__nav-list">
      <li className="detailed-info__nav-item">
        <a className="detailed-info__nav-link" href="#specifications">Характеристики</a>
      </li>
      <li className="detailed-info__nav-item">
        <a className="detailed-info__nav-link" href="#reviews">Отзывы</a>
      </li>
      <li className="detailed-info__nav-item">
        <a className="detailed-info__nav-link" href="#contacts">Контакты</a>
      </li>
    </ul>
    <Specifications />
    <Reviews />
    <Contacts />
  </section>
);

export default DetailedInfo;
