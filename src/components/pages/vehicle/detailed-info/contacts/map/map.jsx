import React, {
  useEffect,
  useRef,
} from "react";

import withGoogleMapsWrapper from "../../../../../../hocs/with-google-maps-wrapper";

import pin from "../../../../../../img/pin.svg";

const center = {
  lat: 59.96765,
  lng: 30.32225,
};

const zoom = 14.5;

const pinCoords = {
  lat: 59.96835,
  lng: 30.31710,
};

const Map = () => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      disableDefaultUI: true,
    });

    window.googleMap = new window.google.maps.Marker({
      position: pinCoords,
      icon: pin,
      map,
    });
  });

  return <div className="contacts__map map" id="map" ref={ref} />;
};

export default withGoogleMapsWrapper(Map);
