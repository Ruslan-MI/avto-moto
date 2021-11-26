import React, {
  useState,
} from "react";
import PropTypes from "prop-types";

import NavItem from "./nav-item/nav-item";
import Specifications from "./specifications/specifications";
import Reviews from "./reviews/reviews";
import Contacts from "./contacts/contacts";

const DetailedInfoBlock = {
  SPECIFICATIONS: `specifications`,
  REVIEWS: `reviews`,
  CONTACTS: `contacts`,
};

const DetailedInfo = ({
  reviews,
  onModalOpen,
}) => {
  const [
    state,
    setState,
  ] = useState({
    currentBlock: DetailedInfoBlock.SPECIFICATIONS,
  });

  const onCurrentBlockChange = (id) => {
    setState((prevState) => ({
      ...prevState,
      currentBlock: id,
    }));
  };

  return (
    <section className="main__detailed-info detailed-info">
      <h2 className="detailed-info__heading visually-hidden">Подробная информация</h2>
      <ul className="detailed-info__nav-list">
        {Object.values(DetailedInfoBlock).map((item) =>
          <NavItem key={item} id={item} currentBlock={state.currentBlock} onClick={onCurrentBlockChange} />)}
      </ul>
      {state.currentBlock === DetailedInfoBlock.SPECIFICATIONS && <Specifications />}
      {state.currentBlock === DetailedInfoBlock.REVIEWS && <Reviews reviews={reviews} onModalOpen={onModalOpen} />}
      {state.currentBlock === DetailedInfoBlock.CONTACTS && <Contacts />}
    </section>
  );
};

DetailedInfo.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default DetailedInfo;
