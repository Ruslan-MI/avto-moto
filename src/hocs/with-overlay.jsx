const withOverlay = (Component) =>
  ({
    onOverlayMouseDown,
    onEscKeydown,
    ...props
  }) => {
    const handleOverlayMouseDown = (evt) => {
      if (evt.target.matches(`.overlay`)) {
        onOverlayMouseDown();
      }
    };

    const handleEscKeydown = (evt) => {
      if (evt.key === `Escape`) {
        onEscKeydown();
      }
    };

    return (
      <div className="overlay" onMouseDown={handleOverlayMouseDown} onKeyDown={handleEscKeydown}>
        <Component {...props} />
      </div>
    );
  };

export default withOverlay;
