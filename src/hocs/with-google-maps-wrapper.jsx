import {
  Wrapper,
} from "@googlemaps/react-wrapper";

const withGoogleMapsWrapper = (Component) =>
  (props) => (
    <Wrapper apiKey={"AIzaSyBSyupZ0960ucVfQie8Zo9ohagG5URMRO0"}>
      <Component {...props} />
    </Wrapper>
  );

export default withGoogleMapsWrapper;
