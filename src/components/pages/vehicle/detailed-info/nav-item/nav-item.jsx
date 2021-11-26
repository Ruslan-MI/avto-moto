import React from "react";
import PropTypes from "prop-types";

const сyrillicBlockMap = {
  specifications: `Характеристики`,
  reviews: `Отзывы`,
  contacts: `Контакты`,
};

const NavItem = ({
  id,
  currentBlock,
  onClick,
}) => {
  const handleLinkClick = (evt) => {
    evt.preventDefault();

    onClick(id);
  };

  return (
    <li className="detailed-info__nav-item">
      {id === currentBlock ?
        <a className="detailed-info__nav-link detailed-info__nav-link--active">{сyrillicBlockMap[id]}</a> :
        <a className="detailed-info__nav-link" href={`#${id}`} onClick={handleLinkClick}>{сyrillicBlockMap[id]}</a>}
    </li>
  );
};

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  currentBlock: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavItem;
