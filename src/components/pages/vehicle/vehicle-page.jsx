import Header from "../../header/header";
import DetailedInfo from "./detailed-info/detailed-info";
import GeneralInfo from "./general-info/general-info";
import Slider from "./slider/slider";

const VehiclePage = () => (
  <>
    <Header />
    <main className="main main--vehicle wrapper">
      <h1 className="main__heading visually-hidden">Информация о транспортном средстве</h1>
      <GeneralInfo />
      <DetailedInfo />
      <Slider />
    </main>
  </>
);

export default VehiclePage;
