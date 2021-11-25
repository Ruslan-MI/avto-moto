const withOverlay = (Component) =>
  ({
    onOverlayClick,
    onEscKeydown,
    ...props
  }) => {
    const handleOnOverlayClick = (evt) => {
      if (evt.target.matches(`.overlay`)) {
        onOverlayClick();
      }
    };

    const handleEscKeydown = (evt) => {
      if (evt.key === `Escape`) {
        onEscKeydown();
      }
    };

    return (
      <div className="overlay" onClick={handleOnOverlayClick} onKeyDown={handleEscKeydown}>
        <Component {...props} />
      </div>
    );
  };

export default withOverlay;
