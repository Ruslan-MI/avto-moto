import {
  useEffect,
} from "react";

const withOverlay = (Component) =>
  ({
    onModalClose,
    ...props
  }) => {
    const handleOverlayMouseDown = (evt) => {
      if (evt.target.matches(`.overlay`)) {
        onModalClose();
      }
    };

    const handleEscKeydown = (evt) => {
      if (evt.key === `Escape`) {
        onModalClose();
      }
    };

    useEffect(() => {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
      };
    });

    return (
      <div className="overlay" onMouseDown={handleOverlayMouseDown} onKeyDown={handleEscKeydown}>
        <Component {...props} onModalClose={onModalClose} />
      </div>
    );
  };

export default withOverlay;
